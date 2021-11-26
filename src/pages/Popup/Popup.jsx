import React, { useState, useEffect } from 'react';

import { Client } from "@notionhq/client"
import {
  Button,
  Heading,
  Checkbox,
  Stack,
  Input,
  Image,
} from "@chakra-ui/react";

import './Popup.css';
import axios from 'axios';


function getTodayDate() {
  var today = new Date();
  var dd    = String(today.getDate()).padStart(2, '0');
  var mm    = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy  = today.getFullYear();

  today     = yyyy + '-' + mm + '-' + dd;
  return today;
}

const Popup = () => {

  async function addItemToDB(notion, databaseId, paperLink, paperTitle, tags, comments, completedReading) {
    try {
      const response = await notion.pages.create({
        parent     : { database_id: databaseId },
        properties : {
          'Paper Link': {
            title : [
              {
                "text" : {
                  "content" : paperLink
                }
              }
            ]
          },
          'Paper Title': {
            "type"      : 'rich_text',
            "rich_text" : [
              {
                "text" : {
                  "content" : paperTitle
                }
              }
            ],
          },
          // https://developers.notion.com/changelog/select-values-can-now-be-dynamically-created-via-create-and-update-page-endpoints-other-updates-since-public-beta-launch
          'Tags' : {
            "type"         : "multi_select",
            "multi_select" : tags
          },
          'Added on': {
            type : 'date',
            date : {
              start: getTodayDate(),
            },
          },
          'Comments': {
            "type"      : 'rich_text',
            "rich_text" : [
              {
                "text" : {
                  "content" : comments
                }
              }
            ],
          },
          'Completed Reading' : {
            "type"     : "checkbox",
            "checkbox" : completedReading
          }
        },
      })
      console.log(response)
      console.log("Success! Entry added.")
      window.close();
    } catch (error) {
      console.error(error.body)
    }
  }

  async function getPaperTitle(paperLink) {

    let arxivAbstractLink = paperLink.substring(0, paperLink.length - 4); // Remove the last '.pdf' part in the link
    arxivAbstractLink     = arxivAbstractLink.replace('pdf', 'abs');

    const response = await axios.get(arxivAbstractLink);
    
    let htmlString = response.data;
    const result   = htmlString.match(/<title>(.+)<\/title>/)
    
    try {
      let title = result[1].split("] ")[1];
      return title;
    } catch (error) {
      console.error(error);

      return "";
    }
  }

  function generateTagsDictList(tags) {

    let tagsList = tags.split(',')
    let tagsDictList = [];

    for (const tag in tagsList) {
      tagsDictList.push({ "name" : tagsList[tag].trim() })
    }

    return tagsDictList;
  }

  function onSubmitClick(comments, tags, checked) {

    let tagsDictList = generateTagsDictList(tags);

    const notion     = new Client({ auth: '' }) // process.env.NOTION_KEY })
    const databaseId = '' // process.env.NOTION_DATABASE_ID

    let queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, tabs => {

      let paperLink = tabs[0].url;
      if (typeof paperLink !== "undefined" && paperLink.includes('arxiv.org/pdf')) {

        getPaperTitle(paperLink)
        .then((paperTitle) => {
          addItemToDB(notion, databaseId, paperLink, paperTitle, tagsDictList, comments, checked);
        });
      }
    });
  }

  const [comments, setComments] = React.useState('');
  const [tags, setTags]         = React.useState('');
  const [checked, setChecked]   = React.useState(false);
  const handleCommentsChange    = (event) => setComments(event.target.value)
  const handleTagsChange        = (event) => setTags(event.target.value)
  const handleCheckboxChange    = (event) => setChecked(event.target.checked)
  
  return (
    <div className="App">
      <header className="App-header">

        <Heading
          fontWeight    = {600}
          fontSize      = {{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight    = {'110%'}
          paddingBottom = {4}
          color         = {'#282c34'}
        >
          ArXiv Enhanced
        </Heading>

        <Stack spacing = {4}>
          <Input type = "text" color = {'#282c34'} placeholder = "Comments" value = {comments} onChange = {handleCommentsChange} />
          <Input type = "text" color = {'#282c34'} placeholder = "Tags"     value = {tags}     onChange = {handleTagsChange} />

          <Checkbox color = {'#282c34'}
            value = {checked}
            onChange = {handleCheckboxChange}
          >
            Completed Reading
          </Checkbox>

          <Button 
            w       = "full" 
            color   = "gray.900"
            onClick = {() => onSubmitClick(comments, tags, checked)}
          >
            Submit
          </Button>
        </Stack>

      </header>
    </div>
  );
};

export default Popup;
