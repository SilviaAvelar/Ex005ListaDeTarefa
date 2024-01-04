const {Builder, By, Key} = require ("selenium-webdriver");
var shoud = require ("chai").should();

// Bloco Describe
describe("Adicionar tarefas", function(){
    // Bloco it
    it("Adicionou uma OUTRA tarefa com sucesso ao aplicativo", async function(){
// Abrir o navegador
let driver = await new Builder().forBrowser("firefox").build();

// Navegar até o site
await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

// Adicionar uma tarefa
await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN);

// Assertion
let seleniumTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){
    return value
});

// Assertion usando o node puro.
// assert.strictEqual(seleniumTest, "Aprender Selenium");

// Assertion usando o Chaí shoud
seleniumTest.should.equal("Aprender Selenium")

// Fechar o navegador
await driver.quit();
    });

    it("Adicionou uma tarefa com ERRO para o REPORT", async function(){
        // Abrir o navegador
        let driver = await new Builder().forBrowser("firefox").build();
        
        // Navegar até o site
        await driver.get("https://herziopinto.github.io/lista-de-tarefas/")
        
        // Adicionar uma tarefa
        await driver.findElement(By.id("inputTask")).sendKeys("Aprender Selenium", Key.RETURN);
        
        // Assertion
        let seleniumTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){
            return value
        });
        
        // Assertion usando o node puro.
        // assert.strictEqual(seleniumTest, "Aprender Selenium");
        
        // Assertion usando o Chaí shoud
        seleniumTest.should.equal("Aprender C#")
        
        // Fechar o navegador
        await driver.quit();
            });
});
