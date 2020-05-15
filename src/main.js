import BoardComponent from "./components/board";
import BoardController from "./controllers/board";
import FilterComponent from "./components/filter";

import SiteMenuComponent from "./components/menu";
import {generateTasks} from "./mocks/tasks";
import {generateFilters} from "./mocks/filter";
import {render, RenderPosition, replace, remove} from "./utils/render";


const TASK_COUNT = 25;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FilterComponent(filters), RenderPosition.BEFOREEND);

const boardComponent = new BoardComponent();
const boardController = new BoardController(boardComponent);

render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);
boardController.render(tasks);
