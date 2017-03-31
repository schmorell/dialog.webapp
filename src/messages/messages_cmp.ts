import {Message, Repository} from './repository';

export class MessagesController {
  folder: string;
  messages: Message[];

  constructor($routeParams, repository: Repository) {
    this.folder = $routeParams.folder;
    this.messages = repository.messagesFor(this.folder);
  }
}

export const MessagesCmp = {
  template : `
    <h1>Messages</h1>
    <ul>
      <li ng-repeat="m in ctrl.messages">
        {{m.id}} - <a href="/messages/{{ctrl.folder}}/{{m.id}}">{{m.text}}</a>
      </li>
    </ul>
    <a href="/settings/pagesize">Change Page Size</a>
    <a href="/">Back</a>
    <select kendo-drop-down-list>
      <option>Albania</option>
      <option>Andorra</option>
      <option>Armenia</option>
      <option>Austria</option>
      <option>Azerbaijan</option>
      <option>Belarus</option>
      <option>Belgium</option>
      <option>Bosnia & Herzegovina</option>
      <option>Bulgaria</option>
      <option>Croatia</option>
      <option>Cyprus</option>
      <option>Czech Republic</option>
      <option>Denmark</option>
      <option>Estonia</option>
      <option>Finland</option>
      <option>France</option>
      <option>Georgia</option>
      <option>Germany</option>
      <option>Greece</option>
      <option>Hungary</option>
      <option>Iceland</option>
      <option>Ireland</option>
      <option>Italy</option>
      <option>Kosovo</option>
      <option>Latvia</option>
      <option>Liechtenstein</option>
      <option>Lithuania</option>
      <option>Luxembourg</option>
      <option>Macedonia</option>
      <option>Malta</option>
      <option>Moldova</option>
      <option>Monaco</option>
      <option>Montenegro</option>
      <option>Netherlands</option>
      <option>Norway</option>
      <option>Poland</option>
      <option>Portugal</option>
      <option>Romania</option>
      <option>Russia</option>
      <option>San Marino</option>
      <option>Serbia</option>
      <option>Slovakia</option>
      <option>Slovenia</option>
      <option>Spain</option>
      <option>Sweden</option>
      <option>Switzerland</option>
      <option>Turkey</option>
      <option>Ukraine</option>
      <option>United Kingdom</option>
      <option>Vatican City</option>
    </select>
      `,
  controller : MessagesController,
  controllerAs: 'ctrl'
};