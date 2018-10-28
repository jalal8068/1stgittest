package runner;

import org.junit.runner.RunWith;

import com.github.mkolisnyk.cucumber.runner.ExtendedCucumber;
import com.github.mkolisnyk.cucumber.runner.ExtendedCucumberOptions;

import cucumber.api.CucumberOptions;
@ExtendedCucumberOptions(

        jsonReport = "target/81/cucumber.json",

        jsonUsageReport = "target/81/cucumber-usage.json",

        usageReport = true,

        detailedReport = true,

        detailedAggregatedReport = true,

        overviewReport = true,

        overviewChartsReport = true,

        pdfPageSize = "A4 Landscape",

        toPDF = true,

        outputFolder = "target/81",

        retryCount = 0)

@CucumberOptions(

        features = { "C:\\workspace\\cucu1Test\\src\\test\\resources\\feature" },

        tags = { "@sample" },

        glue = "sample", plugin = {

        "html:target/81", "json:target/81/cucumber.json",

        "pretty:target/81/cucumber-pretty.txt",

        "usage:target/81/cucumber-usage.json", "junit:target/81/cucumber-results.xml" })

@RunWith(ExtendedCucumber.class)



public class Runnable {

}
