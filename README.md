# Trello Scheduler Automate

This project automates the creation of Trello lists using a scheduled cron job and the Trello API.

## Features
- Automatically creates a new Trello list with today's date and year
- Uses environment variables for Trello credentials
- Ignores sensitive files and dependencies via `.gitignore`

## Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/naimur978/trello-scheduler-automate.git
   cd trello-scheduler-automate
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file with your Trello credentials:
   ```env
   TRELLO_API_KEY=your_api_key
   TRELLO_OAUTH_TOKEN=your_oauth_token
   TRELLO_BOARD_ID=your_board_id
   ```


4. Set up the cron job by editing your crontab:
   1. Run `crontab -e` in your terminal.
   2. Add this line to schedule the script at 15:01 every day:
      ```
      01 15 * * * /opt/homebrew/bin/node /Users/naimur/Downloads/Code/trello-scheduler/src/index.js
      ```
   3. Press `Esc`, type `:wq`, and press `Enter` to save and exit.

## Managing Cron Jobs
- To edit your crontab:
   ```sh
   crontab -e
   ```
- To list your current cron jobs:
   ```sh
   crontab -l
   ```

## Usage
- The main script is `src/index.js`.
- The cron job will run the script at the scheduled time.

