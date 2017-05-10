/**
 * Name: app/config/data.js
 *
 * Description: This is where we store text, etc, to avoid "magic text" in our
 * files.
 *
 * Exports:
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE.txt', which is part of this source code package.
 */

"use strict";

// Creates arena.qualities, arena.questions.mle and arena.questions.client
// The arena content below is (c) 2017 Academy for Coaching Excellence,
// and may not be used or reproduced without permission of the Academy.
export const arena = {
  qualities: [
      'Alert',
      'Attentive',
      'Appreciative',
      'Clear',
      'Compassionate',
      'Courageous',
      'Creative',
      'Empowering',
      'Enthusiastic',
      'Flexible',
      'Focused',
      'Generous',
      'Gentle',
      'Grateful',
      'Joyous',
      'Kind',
      'Loving',
      'Open',
      'Present',
      'Receptive',
      'Supportive',
      'Truthful',
      'Vulnerable'
  ],
  questions: {
    mle: {
      1: "Who am I willing to be in order to produce an extraordinary result out of this interaction?",
      2: "Am I willing to systematically dismantle my structure of knowing?",
      3: "Am I willing to be a demand for coaching?",
      4: "Am I willing to guarantee that whoever coaches me will be successful?"
    },
    client: {
      1: "There are some qualities I am willing to demonstrate in this interaction so we can both make sure we have an extraordinary result out of our session together:",
      2: "During the session am I willing to set aside the opinions, beliefs, and thoughts that may be getting in the way of seeing something clearly?",
      3: "Am I willing to be open minded and fully engaged in order to receive maximum benefit from this time together?",
      4: "The result of coaching in this model is always action. Am I willing to see the most authentic action to take? If I am the person being coached, am I willing to promise to take it?"
    }
  }
};