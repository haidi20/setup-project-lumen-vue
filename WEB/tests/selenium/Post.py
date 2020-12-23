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
    itemPageSize = []

    # klik 'pageSize'
    pageSize = self.driver.find_element_by_class_name("v-select__slot")
    pageSize.click()
    # selanjutnya pilih menampilkan 10 data
    getItemPageSize = self.driver.find_elements_by_css_selector(".v-menu__content.theme--light.menuable__content__active > div > .v-list-item")
    getItemPageSize[1].click()
    time.sleep(2)
    # klik 'pageSize' lagi
    pageSize = self.driver.find_element_by_class_name("v-select__slot")
    pageSize.click()
     # selanjutnya pilih menampilkan 5 data
    getItemPageSize[0].click()
    time.sleep(2)

  def searchData(self, keyword = 'how', clearSearch = True):
    # untuk menampung data hasil pencarian
    allDataPost = []

    # memasukkan kata kunci 'saatnya' untuk melakukan pencarian
    search = self.driver.find_element_by_css_selector(".search > div > div > div > input")
    search.send_keys(keyword)
    time.sleep(3)

    # untuk menampilkan data dari hasil pencarian
    row = self.driver.find_elements_by_tag_name("tr")
    dataPost = row[1].find_elements_by_tag_name("td")
    allDataPost = [item.text for item in dataPost]
    print("")
    print("get first data by searching")
    print("data", allDataPost)
    time.sleep(1)
    if clearSearch:
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

  def addData(self):
    btnAddData = self.driver.find_element_by_css_selector(".btn-add")
    btnAddData.click()
    time.sleep(1)
    
    # insert data
    titleText = '17 agustus 1945'
    authorText = 'pemerintah'
    titleForm = self.driver.find_element_by_id("title")
    titleForm.send_keys(titleText)
    authorForm = self.driver.find_element_by_id("author")
    authorForm.send_keys(authorText)
    time.sleep(2)

    # kirim data
    btnSendData = self.driver.find_element_by_id("send_data")
    btnSendData.click()
    time.sleep(2)

    # check apakah data di input ada atau tidak
    self.searchData(titleText)

  def editData(self):
    self.searchData(keyword='17 agustus', clearSearch=False)

    btnEdit = self.driver.find_element_by_class_name('mdi-pencil')
    btnEdit.click()
    time.sleep(2)

    titleForm = self.driver.find_element_by_id("title")
    authorForm = self.driver.find_element_by_id("author")
    search = self.driver.find_element_by_css_selector(".search > div > div > div > input")

    #clear form 
    self.__clearSearch(titleForm)
    self.__clearSearch(authorForm)    

    # update data
    titleText = '22 Desember 2020'
    authorText = 'anak sedunia'
    titleForm.send_keys(titleText)
    authorForm.send_keys(authorText)
    time.sleep(2)

    # kirim data
    btnSendData = self.driver.find_element_by_id("send_data")
    btnSendData.click()
    time.sleep(1)
    self.__clearSearch(search)
    time.sleep(2)

  def deleteData(self):
    titleText = '22 Desember 2020'
    self.searchData(keyword=titleText, clearSearch=False)

    btnEdit = self.driver.find_element_by_class_name('mdi-delete')
    btnEdit.click()
    time.sleep(3)


  def closeBrowser(self):
    print("")
    print("success testing")
    self.driver.quit()