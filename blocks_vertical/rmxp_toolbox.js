/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Massachusetts Institute of Technology
 * All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

goog.provide('Blockly.Blocks.defaultToolbox');

goog.require('Blockly.Blocks');

/**
 * @fileoverview Provide a default toolbox XML.
 */

Blockly.Blocks.defaultToolbox = '<xml id="toolbox-categories" style="display: none">' +
  '<category name="%{BKY_CATEGORY_MOTION}" id="motion" colour="#4C97FF" secondaryColour="#3373CC">' +
    '<block type="motion_move_path" id="motion_move_path"/>' +
    '<block type="motion_face_dir" id="motion_face_dir"/>' +
    '<block type="motion_step_one" id="motion_step_one"/>' +
    '<block type="motion_wait_move" id="motion_wait_move"/>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_EVENTS}" id="events" colour="#FFD500" secondaryColour="#CC9900">' +
    '<block type="event_whentiming" id="event_whentiming"/>' +
    '<block type="event_whenswitchon" id="event_whenswitchon"/>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_SWITCHES}" id="switches" colour="#FF8C1A" secondaryColour="#CC9900">' +
    '<block type="event_setswitchto" id="event_setswitchto"/>' +
  '</category>' +
  '<category name="更多功能" id="extensions" colour="#FF6680" secondaryColour="#FF4D6A">' +  
    '<block type="extension_show_text" id="extension_show_text">' +    
      '<value name="TEXT">' +
        '<shadow type="text">' +
          '<field name="TEXT">文章内容</field>' +
        '</shadow>' +
      '</value>' +
    '</block>' +
  '</category>' +
  '<category name="%{BKY_CATEGORY_VARIABLES}" id="data" colour="#FF8C1A" secondaryColour="#DB6E00" custom="VARIABLE">' +
  '</category>' +
  '</xml>';
