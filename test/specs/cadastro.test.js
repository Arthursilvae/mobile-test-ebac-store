import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
 
describe('Cadastro', () => {
   it('cadastro com credencias validas', async () => {
    await homePage.openMenu('profile')
    await cadastroPage.openSingUp()
    await cadastroPage.cadastro('Arthur', 'Silva', '999991678', 'arthur123@teste.com.br','teste123', 'teste123')
     await homePage.openMenu('profile')
            expect( await (await profilePage.profileName('Silva Arthur')).isDisplayed()).toBeTruthy()
    
})

});