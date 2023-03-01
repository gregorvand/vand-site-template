/** @type {import('./$types').PageLoad} */

import dayjs from 'dayjs'

let now = dayjs().year();

export function load() {
  return {
    date: now
  };
}