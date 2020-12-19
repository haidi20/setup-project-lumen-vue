import time
from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager

driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())
driver.get('http://localhost:8080')
time.sleep(2)
driver.quit()

# from selenium import webdriver

# from selenium.webdriver.firefox.firefox_binary import FirefoxBinary

# binary = FirefoxBinary('C:\Program Files\Mozilla Firefox\firefox.exe')
# fp = webdriver.FirefoxProfile()

# # driver = webdriver.Firefox(firefox_binary=binary, executable_path=r'C:\\geckodriver.exe')
# driver = webdriver.Firefox(firefox_binary=binary, firefox_profile=fp, executable_path='geckodriver.exe')
# driver.get('https://www.google.com')

# from selenium import webdriver
# from webdriver_manager.firefox import GeckoDriverManager

# driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())