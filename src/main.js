import {createSiteMenuTemplate} from "./components/menu";
import {createSortingTemplate} from "./components/sort";
import {createFilterTemplate} from "./components/filter";
import {createBoardTemplate} from "./components/board";
import {createTaskTemplate} from "./components/task";
import {createEditTaskTemplate} from "./components/task-edit";
import {createLoadMoreButtonTemplate} from "./components/load-button";
import {generateTasks} from "./mocks/tasks";
import {generateFilters} from "./mocks/filter";

const TASK_COUNT = 3;

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);


const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createFilterTemplate(filters));
render(siteMainElement, createBoardTemplate());

const siteBoardElement = document.querySelector(`.board`);
const siteTaskListElement = siteBoardElement.querySelector(`.board__tasks`);

render(siteBoardElement, createSortingTemplate(), `afterbegin`);
render(siteTaskListElement, createEditTaskTemplate());

for (let i = 0; i < tasks.lenght; i++) {
  render(siteTaskListElement, createTaskTemplate(tasks[i]));
}

render(siteBoardElement, createLoadMoreButtonTemplate());
