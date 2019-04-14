/**
 * @author Nam NH
 * Center point to export instances of services
 */
import LanguageService from './wrapper/language-service'
import AuthsService from './wrapper/auths-service'
import TodoService from './wrapper/todo-service'
import ProjectListService from './wrapper/project-list-service'
export const languageService = new LanguageService()
export const authsService = new AuthsService()
export const todoService = new TodoService()
export const projectListServices = new ProjectListService()
