import {Command, Flags} from '@oclif/core';
import * as inquirer from 'inquirer';

export default class Dotdigital extends Command {
  static description = 'Dotdigital next generation JS';
  private isDDgChat = false;
  private chatApiSpaceId = '';
  private framework = '';
  private buildtool = '';
  private wbtEnabled = false;
  private wbtProfileId = '';
  
  async run() {
    let framework: any = await inquirer.prompt([
      {
      name: 'framework',
      message: 'Select a framework',
      type: 'list',
      choices: [{name: 'React JS'}, {name: 'Vue Js'}, {name: 'Vanilla JS'}],
    }]).then((answers) => {
      this.framework = answers.framework;
    });

    let buildtool: any = await inquirer.prompt([{
      name: 'buildtool',
      message: 'Select a build tool',
      type: 'list',
      choices: [{name: 'Vite'}, {name: 'Webpack'}]
    }]).then((answers) => {
      this.buildtool = answers.buildtool;
    });

    let ddg_chat: any = await inquirer.prompt([{
      type: 'confirm',
      name: 'ddgChat',
      message: 'Do you want to install dotdigital chat?',
      default: false,
    }]).then((answers) => {
      this.isDDgChat = answers.ddgChat
    });

    if (this.isDDgChat) {
      let chat_api_space_id: any = await inquirer.prompt([{
        type: 'input',
        name: 'chat_api_space_id',
        message: "Enter your dotdigital chat api space id",
      }]).then((answer) => {
        this.chatApiSpaceId = answer.chat_api_space_id
      });
    }

    let wbtEnabled: any = await inquirer.prompt([{
      type: 'confirm',
      name: 'wbtEnabled',
      message: 'Do you want to install dotdigital web behaviour tracking scripts?',
      default: false
    }]).then((answers) => {
      this.wbtEnabled = answers.wbtEnabled;
    });

    if (this.wbtEnabled) {
      let wbt_profile_id: any = await inquirer.prompt([{
        type: 'input',
        name: 'wbt_profile_id',
        message: "Enter your web beyaviour tracking profile id",
      }]).then((answer)=> {
        this.wbtProfileId = answer.wbt_profile_id
      });
    }


    this.log(`User answers`);
    this.log(`Framework: ${this.framework}`)
    this.log(`Buildtool: ${this.buildtool}`)
    this.log(`Install dotdigital chat: ${this.isDDgChat}`)
    this.log(`Install web behaviour tracking scripts?: ${this.wbtEnabled}`)
    this.log(`Chat api space id: ${this.chatApiSpaceId}`)
    this.log(`Wbt profile: ${this.wbtProfileId}`)
  }
}
