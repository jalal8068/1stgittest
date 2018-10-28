@sample
Feature: am going to validate NTL home page
Scenario Outline: validating NTL home page with various data

Given open browser as <BROWSER>
Then enter URL as <URL>
Then enter username as <USERNAME>
And enter phonenumber as <PHONENUMBER>
When select pickup address as <PICK>
Then select drop address as <DROP>
And select vehicle type as <VEHICLETYPE>
But dont click book button


Examples: 
|BROWSER|URL|USERNAME|PHONENUMBER|PICK|DROP|VEHICLETYPE|
|FIREFOX|http://www.ntltaxi.com/|Jalal|12345|ADYAR|ADYAR|Sedan|
|FIREFOX|http://www.ntltaxi.com/|Yuva|6789|ADYAR|ADYAR|Sedan|
|FIREFOX|http://www.ntltaxi.com/|Dinesh|55555|ADYAR|ADYAR|Sedan|


















#@sample
#Feature: Validate NTL Taxi Home Page
#Scenario: Validate NTL Taxi Home Page with valid data
#Given open browser as FIREFOX
#Then enter URL as http://www.ntltaxi.com/
#Then enter username as jalal
#And enter phonenumber as 9092818068
#When select pickup address as Adyar
#Then select drop address as Adyar
#And select vehicle type as Sedan
#But dont click book button