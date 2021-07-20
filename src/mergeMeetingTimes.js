/*
Write a function that takes an array of multiple meeting time ranges and returns
an array of condensed ranges.

For example, given:
[
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]
the function would return:
[
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 },
]

Do not assume the meetings are in order. The meeting times are coming from
multiple teams.

Write a solution that's efficient even when we can't put a nice upper bound on
the numbers representing our time ranges.
*/

// Solution
// O(nlog n) time and O(n) space

/**
 * @name mergeMeetingTimes
 * @param {array} meetings - An array of objects.
 * @returns {array} An array of merged objects.
 */

export const mergeMeetingTimes = (meetings) => {
  // Create a deep copy of the meetings array
  const meetingsCopy = JSON.parse(JSON.stringify(meetings));
  // Sort by startTime
  const sortedMeetings = meetingsCopy.sort((a, b) => a.startTime - b.startTime);
  // Create and initialize mergedMeetings
  const mergedMeetings = [sortedMeetings[0]];

  // Loop through sortedMeetings and merge meetings that overlap
  for (let i = 1; i < sortedMeetings.length; i++) {
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    const currentMeeting = sortedMeetings[i];

    // If the meetings overlap, merge them using the later endTime
    if (lastMergedMeeting.endTime >= currentMeeting.startTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime
      );
    } else {
      // Add the current meeting otherwise
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings;
};
