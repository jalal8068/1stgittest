package sample;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.HomePage;


public class SampleTest {
	public static WebDriver wd=null;
@Given("^open browser as (.*)$")
public void login(String browser){
	System.out.println("OPEN BROWSER"+browser);
	if(wd==null){
	wd = new FirefoxDriver();
	}
}
@Then("^enter URL as (.*)$")
public void enterURL(String url){
	System.out.println("ENTER URL"+url);
	HomePage.enterURl(wd, url);
	//wd.get(url);
}
@Then("^enter username as (.*)$")
public void Enterusername(String username){
	System.out.println("Enter user name"+username);
	//wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[2]")).sendKeys(username);
HomePage.enterusername(wd, username);
}
@And("^enter phonenumber as (.*)$")
public void enterphonenumber(String phonenumber){
	System.out.println("Enter phone number"+phonenumber);
	//wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[3]")).sendKeys(phonenumber);
HomePage.entermobile(wd, phonenumber);
}
@When("^select pickup address as (.*)$")
public void enterpickup(String pick){
System.out.println("Enter pick up address"+pick);
	//wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[4]")).sendKeys(pick);
HomePage.enterpickup(wd, pick);
}
@Then("^select drop address as (.*)$")
public void enterdropaddress(String drop){
	System.out.println("enter drop address"+drop);
//	wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[7]")).sendKeys(drop);
HomePage.enterdrop(wd, drop);
}
@And("^select vehicle type as (.*)$")
public void entervehicletype(String vehicletype){

System.out.println("Enter vehicle type"+vehicletype);
//WebElement dropdown = 	wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/select[1]"));
	//Select s = new Select(dropdown);
//s.selectByVisibleText(vehicletype);
HomePage.entercab(wd, vehicletype);
}
@But("^dont click book button$")
public void dontclickbutton(){
	
	System.out.println("Dont click button");

}

@After
public void teardown(Scenario s) throws IOException{
	if(s.isFailed()){
		File src = ((TakesScreenshot)wd).getScreenshotAs(OutputType.FILE);
		InputStream stream =new FileInputStream(src);
		s.embed(IOUtils.toByteArray(stream), "image/jpeg");
		
			

		System.out.println("test cases failed");
	}

	
	
}



}
