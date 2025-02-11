import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await homePage.openMenu('profile')
        await loginPage.login('arthur@ebac.com.br', 'teste123')
        await homePage.openMenu('profile')
        expect( await (await profilePage.profileName('qe arthur')).isDisplayed()).toBeTruthy()
    })
})
