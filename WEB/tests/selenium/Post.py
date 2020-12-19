import time
import asyncio
import chromedriver_binary 
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from concurrent.futures.thread import ThreadPoolExecutor

class Post:
  profile = ''
  driver = webdriver.Chrome('C:\chromedriver.exe')

  def __init__(self):  
    self.driver.get('http://localhost:8080')
    time.sleep(2)
    
  def changePageSize(self):
    # klik 'pageSize'
    pageSize = self.driver.find_element_by_class_name("v-select__slot")
    pageSize.click()
    # selanjutnya pilih memunculkan 10 data
    pageSizeTen = self.driver.find_element_by_id("list-item-41-1")
    pageSizeTen.click()
    time.sleep(2)
    # klik 'pageSize'
    pageSize = self.driver.find_element_by_class_name("v-select__slot")
    pageSize.click()
     # selanjutnya pilih memunculkan 5 data
    pageSizeTen = self.driver.find_element_by_id("list-item-41-0")
    pageSizeTen.click()
    time.sleep(2)

  def searchData(self):
    # untuk menampung data hasil pencarian
    allDataPost = []
    # memasukkan kata kunci 'saatnya' untuk melakukan pencarian
    search = self.driver.find_element_by_css_selector(".search > div > div > div > input")
    search.send_keys('saatnya')
    time.sleep(3)

    # untuk menampilkan data dari hasil pencarian
    row = self.driver.find_elements_by_tag_name("tr")
    dataPost = row[1].find_elements_by_tag_name("td")
    allDataPost = [item.text for item in dataPost]
    print("")
    print("data", allDataPost)
    time.sleep(1)
    self.__clearSearch(search)
    time.sleep(2)

  def __clearSearch(self, element):
    length = len(element.get_attribute('value'))
    element.send_keys(length * Keys.BACKSPACE)
    time.sleep(2)

  def changePage(self):
    allPage = []
    page = self.driver.find_element_by_css_selector("ul.v-pagination")
    choosePage = page.find_elements_by_css_selector("li")
    choosePage[2].click()
    time.sleep(3)
    choosePage[1].click()
    time.sleep(3)
    # print(len(page))
    # allPage = [item.text for item in choosePage]
    # print(allPage)

  def closeBrowser(self):
    print("")
    print("lancar testing")
    self.driver.quit()