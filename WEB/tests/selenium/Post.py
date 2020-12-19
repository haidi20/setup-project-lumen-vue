import time
import asyncio
import chromedriver_binary 
from bs4 import BeautifulSoup
from selenium import webdriver
from concurrent.futures.thread import ThreadPoolExecutor

class Post:
  profile = ''
  driver = webdriver.Chrome('C:\chromedriver.exe')

  def __init__(self):  
    self.driver.get('http://localhost:8080')
    time.sleep(2)
    
  def changePageSize(self):
    # pageSize isi mendapatkan select ganti page 
    pageSize = self.driver.find_element_by_class_name("v-select__slot")
    pageSize.click()
    # selanjutnya pilih memunculkan 10 data
    pageSizeTen = self.driver.find_element_by_id("list-item-41-1")
    pageSizeTen.click()
    time.sleep(2)

  def searchData(self):
    # untuk menampung data hasil pencarian
    allDataPost = []
    # memasukkan kata kunci 'saatnya' untuk melakukan pencarian
    search = self.driver.find_element_by_css_selector(".search > div > div > div > input")
    search.send_keys('saatnya')
    time.sleep(6)

    # untuk menampilkan data dari hasil pencarian
    row = self.driver.find_elements_by_tag_name("tr")
    dataPost = row[1].find_elements_by_tag_name("td")
    allDataPost = [item.text for item in dataPost]
    print("")
    print("data", allDataPost)

  def closeBrowser(self):
    print("")
    print("lancar testing")
    self.driver.quit()