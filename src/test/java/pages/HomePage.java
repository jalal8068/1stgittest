package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;

public class HomePage {
	public static void enterURl(WebDriver wd, String URL){
		wd.get(URL);
	}
public static void enterusername(WebDriver wd,String username1){
	WebElement name = wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[2]"));
	name.sendKeys(username1);
}
public static void entermobile(WebDriver wd,String number){
	WebElement number1 = wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[3]"));
number1.sendKeys(number);
}
public static void enterpickup(WebDriver wd,String pick){
	WebElement pick1 = wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[4]"));
	pick1.sendKeys(pick);
}
public static void enterdrop(WebDriver wd,String drop){
	WebElement drop1 = wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/input[7]"));
	drop1.sendKeys(drop);
}
public static void entercab(WebDriver wd,String type){
	WebElement dropdown1 = wd.findElement(By.xpath("html/body/section/div/div[2]/div/form/select[1]"));
Select s = new Select(dropdown1);
s.selectByVisibleText(type);

}
}
