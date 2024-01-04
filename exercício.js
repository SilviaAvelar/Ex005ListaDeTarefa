const {Builder, By, Key} = require ("selenium-webdriver");
var should = require ("chai").should();

async function example() {

// Abrir o navegador
let driver = await new Builder().forBrowser("firefox").build();

// Navegar até o site
await driver.get("https://herziopinto.github.io/lista-de-tarefas/");

// Adicionar tarefas
await driver.findElement(By.id("inputTask")).sendKeys("Rever a aula de Selenium", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Rever as aulas", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Estudar Inglês", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Tirar as dúvidas com professor", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Cantar música em inglês", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Fazer o almoço", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Ir a praia", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Passear no shopping", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Fazer compras", Key.RETURN);
await driver.findElement(By.id("inputTask")).sendKeys("Assistir filme com meu esposo", Key.RETURN)

// Assertion
let seleniumTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[1]/label")).getText().then(function(value){
    return value
});
seleniumTest.should.equal("Rever a aula de Selenium")

let aulasTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[2]/label")).getText().then(function(value){
    return value
});
aulasTest.should.equal("Rever as aulas")

let estudarTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[3]/label")).getText().then(function(value){
    return value
});
estudarTest.should.equal("Estudar Inglês")

let dúvidasTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[4]/label")).getText().then(function(value){
    return value
});
dúvidasTest.should.equal("Tirar as dúvidas com professor")

let músicaTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[5]/label")).getText().then(function(value){
    return value
});
músicaTest.should.equal("Cantar música em inglês")

let almoçoTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[6]/label")).getText().then(function(value){
    return value
});
almoçoTest.should.equal("Fazer o almoço")

let praiaTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[7]/label")).getText().then(function(value){
    return value
});
praiaTest.should.equal("Ir a praia")

let passearTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[8]/label")).getText().then(function(value){
    return value
});
passearTest.should.equal("Passear no shopping")

let comprasTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[9]/label")).getText().then(function(value){
    return value
});
comprasTest.should.equal("Fazer compras")

let filmeTest = await driver.findElement(By.xpath("/html/body/div/section/ul/li[10]/label")).getText().then(function(value){
    return value
});
filmeTest.should.equal("Assistir filme com meu esposo")

}

example();