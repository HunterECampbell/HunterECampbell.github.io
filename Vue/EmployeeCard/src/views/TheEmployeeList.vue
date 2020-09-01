<template>
  <div id="the-employee-list">
    <div id="top-of-body">
      <div class="button" @click="toggleNewEmployeeModal">New Employee</div>
    </div>
    <div id="top-of-table">
      <h2 id="table-title">Employees</h2>
      <div id="search-area">
        <div id="search-type" :class="{ 'search-type-open': searchTypeOpen }" @click="toggleSearchType">Search: {{ searchColumn }}
          <i class="material-icons" v-if="!searchTypeOpen">arrow_drop_down</i>
          <i class="material-icons" v-if="searchTypeOpen">arrow_drop_up</i>
        </div>
        <div id="search-type-drop" v-if="searchTypeOpen">
          <ul>
            <li @click="setSearchType('[All]')">[All]</li>
            <li @click="setSearchType('Employee Name')">Employee Name</li>
            <li @click="setSearchType('Department')">Department</li>
            <li @click="setSearchType('Manager')">Manager</li>
            <li @click="setSearchType('Job Title')">Job Title</li>
            <li @click="setSearchType('Work Anniversary')">Work Anniversary</li>
            <li @click="setSearchType('Birthday')">Birthday</li>
          </ul>
        </div>
        <i class="material-icons" id="search-icon">search</i>
        <input type="search" id="search-bar" placeholder="Search Employees..."
          @blur="toggleSearchBorder"
          @focus="toggleSearchBorder"
          @keyup="search"
        >
      </div>
    </div>
    <div id="employee-table">
      <table>
        <tr id="table-header-row">
          <td @click="setSort('Employee Name')">Employee Name
            <i class="material-icons" v-if="sortBy === 'Employee Name' && sortAscending">arrow_drop_down</i>
            <i class="material-icons" v-if="sortBy === 'Employee Name' && !sortAscending">arrow_drop_up</i>
          </td>
          <td @click="setSort('Department')">Department
            <i class="material-icons" v-if="sortBy === 'Department' && sortAscending">arrow_drop_down</i>
            <i class="material-icons" v-if="sortBy === 'Department' && !sortAscending">arrow_drop_up</i>
          </td>
          <td @click="setSort('Manager')">Manager
            <i class="material-icons" v-if="sortBy === 'Manager' && sortAscending">arrow_drop_down</i>
            <i class="material-icons" v-if="sortBy === 'Manager' && !sortAscending">arrow_drop_up</i>
          </td>
          <td @click="setSort('Job Title')">Job Title
            <i class="material-icons" v-if="sortBy === 'Job Title' && sortAscending">arrow_drop_down</i>
            <i class="material-icons" v-if="sortBy === 'Job Title' && !sortAscending">arrow_drop_up</i>
          </td>
          <td @click="setSort('Work Anniversary')">Work Anniversary
            <i class="material-icons" v-if="sortBy === 'Work Anniversary' && sortAscending">arrow_drop_down</i>
            <i class="material-icons" v-if="sortBy === 'Work Anniversary' && !sortAscending">arrow_drop_up</i>
          </td>
          <td @click="setSort('Birthday')">Birthday
            <i class="material-icons" v-if="sortBy === 'Birthday' && sortAscending">arrow_drop_down</i>
            <i class="material-icons" v-if="sortBy === 'Birthday' && !sortAscending">arrow_drop_up</i>
          </td>
        </tr>
        <tr v-for="(employee, index) in employeeList" :key="index">
          <td>{{ employee.name }}</td>
          <td>{{ employee.department }}</td>
          <td>{{ employee.manager }}</td>
          <td>{{ employee.jobTitle }}</td>
          <td>{{ employee.workAnniversary }}</td>
          <td>{{ employee.birthday }}
            <i class="material-icons ellipsis"
              @click="setSelectedEmployeeDetails(
                employee.name,
                employee.department,
                employee.manager,
                employee.jobTitle,
                employee.workAnniversary,
                employee.birthday
              );
              setShowEllipsisMenuToTrue();">more_horiz
            </i>
          </td>
        </tr>
      </table>
    </div>

    <div id="ellipsis-menu" class="modal" v-show="showEllipsisMenu">
      <i class="material-icons close" @click="toggleEllipsisMenu">close</i>
      <div id="edit-row" class="row" @click="toggleEditModal">
        <i class="material-icons">edit</i>
        <p>Edit "{{ selectedEmployeeName }}"</p>
      </div>
      <div id="delete-row" class="row" @click="toggleDeleteModal">
        <i class="material-icons">delete</i>
        <p>Delete "{{ selectedEmployeeName }}"</p>
      </div>
    </div>

    <div id="edit-employee-modal" class="modal" v-show="showEditModal">
      <i class="material-icons close" @click="toggleEditModal">close</i>
      <h3>Edit "{{ this.selectedEmployeeName }}"</h3>
      <div id="edit-employee-modal-body">
        <form>
          <label for="name" id="edit-employee-name-label">Name</label>
          <input type="text" id="edit-employee-name" class="input-border" name="name">
          <label for="department" id="edit-employee-department-label">Department</label>
          <input type="text" id="edit-employee-department" class="input-border" name="department">
          <label for="manager" id="edit-employee-manager-label">Manager</label>
          <input type="text" id="edit-employee-manager" class="input-border" name="manager">
          <label for="job-title" id="edit-employee-job-title-label">Job Title</label>
          <input type="text" id="edit-employee-job-title" class="input-border" name="job-title">
          <label for="work-anniversary" id="edit-employee-work-anniversary-label">Work Anniversary</label>
          <input type="date" id="edit-employee-work-anniversary" class="input-border" name="work-anniversary" pattern="\d">
          <label for="birthday" id="edit-employee-birthday-label">Birthday</label>
          <input type="date" id="edit-employee-birthday" class="input-border" name="birthday">
        </form>
      </div>
      <div id="edit-employee-modal-footer">
        <div class="button" @click="editEmployee">Save</div>
        <div id="edit-employee-modal-cancel" class="button" @click="toggleEditModal">Cancel</div>
      </div>
    </div>

    <div id="delete-modal" class="modal" v-if="showDeleteModal">
      <h3>Delete "{{ this.selectedEmployeeName }}"</h3>
      <p>Are you sure you want to delete "{{ this.selectedEmployeeName }}"?</p>
      <div id="delete-modal-footer">
        <div class="button red-button" @click="deleteEmployee">Delete</div>
        <div id="delete-modal-cancel" class="button" @click="toggleDeleteModal">Cancel</div>
      </div>
    </div>

    <div id="new-employee-modal" class="modal" v-if="showNewEmployeeModal">
      <i class="material-icons close" @click="toggleNewEmployeeModal">close</i>
      <h3 id="new-employee-modal-title">Create New Employee</h3>
      <div id="new-employee-modal-body">
        <form>
          <label for="name" id="new-employee-name-label">Name</label>
          <input type="text" id="new-employee-name" class="input-border" name="name">
          <label for="department" id="new-employee-department-label">Department</label>
          <input type="text" id="new-employee-department" class="input-border" name="department">
          <label for="manager" id="new-employee-manager-label">Manager</label>
          <input type="text" id="new-employee-manager" class="input-border" name="manager">
          <label for="job-title" id="new-employee-job-title-label">Job Title</label>
          <input type="text" id="new-employee-job-title" class="input-border" name="job-title">
          <label for="work-anniversary" id="new-employee-work-anniversary-label">Work Anniversary</label>
          <input type="date" id="new-employee-work-anniversary" class="input-border" name="work-anniversary" pattern="\d">
          <label for="birthday" id="new-employee-birthday-label">Birthday</label>
          <input type="date" id="new-employee-birthday" class="input-border" name="birthday">
        </form>
      </div>
      <div id="new-employee-modal-footer">
        <div id="new-employee-add-btn" class="button" @click="addNewEmployee">Add</div>
        <div id="new-employee-cancel-btn" class="button" @click="toggleNewEmployeeModal">Cancel</div>
      </div>
    </div>
  </div>
</template>

<script>
import dateformat from 'dateformat'

export default {
  name: 'TheEmployeeList',
  data() {
    return {
      borderToggle: false,
      employeeList: [],
      employeeListOriginal: [
        {
          name: 'Hunter Campbell',
          department: 'Engineering',
          manager: 'Elisa Snow',
          jobTitle: 'QA Engineer',
          workAnniversary: 'Sep. 2, 2019',
          birthday: 'Dec. 14, 1994',
        },
        {
          name: 'Billy Joel',
          department: 'Entertainment',
          manager: 'Self',
          jobTitle: 'Musician',
          workAnniversary: 'Jan. 1, 1970',
          birthday: 'May 9, 1949',
        },
        {
          name: 'Tony Stark (Stank)',
          department: 'Engineering',
          manager: 'Self',
          jobTitle: 'Iron Man',
          workAnniversary: 'May 29, 1970',
          birthday: 'May 29, 1970',
        },
        {
          name: 'John Cena',
          department: 'Entertainment',
          manager: 'Self',
          jobTitle: 'Wrestler',
          workAnniversary: 'Nov. 5, 1999',
          birthday: 'Apr. 23, 1977',
        },
        {
          name: 'Weird Al Yankovic',
          department: 'Entertainment',
          manager: 'Self',
          jobTitle: 'Singer',
          workAnniversary: 'Jan. 1, 1976',
          birthday: 'Oct. 23, 1959',
        },
        {
          name: 'Perry the Platapus',
          department: 'Entertainment',
          manager: 'Cartoon Network',
          jobTitle: 'Cartoon',
          workAnniversary: 'Jan. 1, 2007',
          birthday: 'Jan. 1, 2002',
        },
        {
          name: 'Mark Ruffalo',
          department: 'Entertainment',
          manager: 'Self',
          jobTitle: 'Actor',
          workAnniversary: 'Jan. 1, 1989',
          birthday: 'Nov. 22, 1967',
        },
        {
          name: 'Chuck Norris',
          department: 'Martial Arts',
          manager: 'Self',
          jobTitle: 'Martial Artist',
          workAnniversary: 'Jan. 1, 1968',
          birthday: 'Mar. 10, 1940',
        },
        {
          name: 'Bruce Lee',
          department: 'Martial Arts',
          manager: 'Self',
          jobTitle: 'Martial Artist',
          workAnniversary: 'Apr. 1, 1990',
          birthday: 'Nov. 27, 1940',
        },
        {
          name: 'Lorenz Matthews',
          department: 'Food',
          manager: 'Bill Corzen',
          jobTitle: 'Chef',
          workAnniversary: 'Jul. 5, 2018',
          birthday: 'May 4, 1980',
        },
        {
          name: 'Bill Corzen',
          department: 'Food',
          manager: 'Self',
          jobTitle: 'Head Chef',
          workAnniversary: 'Aug. 14, 2010',
          birthday: 'Jun. 9, 2000',
        },
        {
          name: 'Bill Nye',
          department: 'Research',
          manager: 'Self',
          jobTitle: 'Scientist',
          workAnniversary: 'Jul. 5, 1996',
          birthday: 'Nov. 27, 1955',
        },
        {
          name: 'Killian League',
          department: 'Human Resources',
          manager: 'Francis Rose',
          jobTitle: 'HR Representative',
          workAnniversary: 'Feb. 21, 2018',
          birthday: 'Apr. 17, 1978',
        },
        {
          name: 'Love Harring',
          department: 'Human Resources',
          manager: 'Francis Rose',
          jobTitle: 'HR Representative',
          workAnniversary: 'Dec. 9, 2019',
          birthday: 'Jul. 10, 1996',
        },
        {
          name: 'Francis Rose',
          department: 'Human Resources',
          manager: 'Joel Livingston',
          jobTitle: 'HR Manager',
          workAnniversary: 'Jan. 20, 2012',
          birthday: 'Oct. 8, 1976',
        },
        {
          name: 'Joel Livingston',
          department: 'Executives',
          manager: 'Self',
          jobTitle: 'CEO',
          workAnniversary: 'Nov. 12, 2011',
          birthday: 'Jul. 15, 1983',
        },
        {
          name: 'Larz Rudolf',
          department: 'Sales',
          manager: 'Terra Dactyl',
          jobTitle: 'Sales Representative',
          workAnniversary: 'Mar. 12, 2019',
          birthday: 'Apr. 5, 2001',
        },
        {
          name: 'Terra Dactyl',
          department: 'Sales',
          manager: 'Ron Rolley',
          jobTitle: 'Sales Manager',
          workAnniversary: 'Aug. 23, 2016',
          birthday: 'Mar. 3, 1999',
        },
        {
          name: 'Ron Rolley',
          department: 'Sales',
          manager: 'Joel Livingston',
          jobTitle: 'Strategic Partnerships Manager',
          workAnniversary: 'Jul. 19, 2014',
          birthday: 'Apr. 12, 1966',
        },
        {
          name: 'Mace Windu',
          department: 'Security',
          manager: 'Yoda',
          jobTitle: 'Jedi Master',
          workAnniversary: 'Jan. 1, 1990',
          birthday: 'Jan. 1 1940',
        },
        {
          name: 'Yoda',
          department: 'Security',
          manager: 'Self',
          jobTitle: 'Jedi Grand Master',
          workAnniversary: 'Jan. 1, 1990',
          birthday: 'Jan. 1, 1090',
        },
        {
          name: 'Obi-Wan Kenobi',
          department: 'Security',
          manager: 'Yoda',
          jobTitle: 'Jedi Master',
          workAnniversary: 'Jan. 1, 1990',
          birthday: 'Jan. 1 1950',
        },
        {
          name: 'Ron Weasley',
          department: 'Research',
          manager: 'Self',
          jobTitle: 'Wizard',
          workAnniversary: 'Aug. 14, 1991',
          birthday: 'Mar. 1, 1980',
        },
        {
          name: 'Hermione Granger',
          department: 'Research',
          manager: 'Self',
          jobTitle: 'Witch',
          workAnniversary: 'Aug. 14, 1991',
          birthday: 'Sep. 17, 1979',
        },
        {
          name: 'Harry Potter',
          department: 'Research',
          manager: 'Self',
          jobTitle: 'Wizard',
          workAnniversary: 'Aug. 14, 1991',
          birthday: 'Jul. 31, 1980',
        },
        {
          name: 'Tammy Longstrider',
          department: 'Sales',
          manager: 'Ron Rolley',
          jobTitle: 'Sales Representative',
          workAnniversary: 'Aug. 15, 2019',
          birthday: 'Jan. 14, 1996',
        },
        {
          name: 'Tina Tan',
          department: 'Sales',
          manager: 'Ron Rolley',
          jobTitle: 'Sales Representative',
          workAnniversary: 'Feb. 10, 2020',
          birthday: 'Nov. 19, 1994',
        },
      ],
      employeeListMemory: [],
      searchColumn: '[All]',
      searchTable: [],
      searchTypeOpen: false,
      selectedEmployeeName: '',
      selectedEmployeeDepartment: '',
      selectedEmployeeManager: '',
      selectedEmployeeJobTitle: '',
      selectedEmployeeWorkAnniversary: '',
      selectedEmployeeBirthday: '',
      showEditModal: false,
      showEllipsisMenu: false,
      showDeleteModal: false,
      showNewEmployeeModal: false,
      sortAscending: true,
      sortBy: '',
    }
  },
  created() {
    this.employeeList = this.employeeListOriginal
    this.employeeListMemory = this.employeeList
  },
  methods: {
    addNewEmployee() {
      let success = true

      if (document.getElementById('new-employee-name').value === '') {
        success = false
        document.getElementById('new-employee-name-label').style.color = 'red'
        document.getElementById('new-employee-name').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('new-employee-name-label').style.color = '#2c3e50'
        document.getElementById('new-employee-name').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('new-employee-department').value === '') {
        success = false
        document.getElementById('new-employee-department-label').style.color = 'red'
        document.getElementById('new-employee-department').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('new-employee-department-label').style.color = '#2c3e50'
        document.getElementById('new-employee-department').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('new-employee-manager').value === '') {
        success = false
        document.getElementById('new-employee-manager-label').style.color = 'red'
        document.getElementById('new-employee-manager').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('new-employee-manager-label').style.color = '#2c3e50'
        document.getElementById('new-employee-manager').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('new-employee-job-title').value === '') {
        success = false
        document.getElementById('new-employee-job-title-label').style.color = 'red'
        document.getElementById('new-employee-job-title').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('new-employee-job-title-label').style.color = '#2c3e50'
        document.getElementById('new-employee-job-title').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('new-employee-work-anniversary').value === '') {
        success = false
        document.getElementById('new-employee-work-anniversary-label').style.color = 'red'
        document.getElementById('new-employee-work-anniversary').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('new-employee-work-anniversary-label').style.color = '#2c3e50'
        document.getElementById('new-employee-work-anniversary').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('new-employee-birthday').value === '') {
        success = false
        document.getElementById('new-employee-birthday-label').style.color = 'red'
        document.getElementById('new-employee-birthday').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('new-employee-birthday-label').style.color = '#2c3e50'
        document.getElementById('new-employee-birthday').style.border = 'solid 2px #999999'
      }

      dateformat.masks.longDateWithPeriod = 'mmm. d, yyyy'
      if (success) {
        const payload = {
          name: document.getElementById('new-employee-name').value,
          department: document.getElementById('new-employee-department').value,
          manager: document.getElementById('new-employee-manager').value,
          jobTitle: document.getElementById('new-employee-job-title').value,
          workAnniversary: dateformat(document.getElementById('new-employee-work-anniversary').value, 'longDateWithPeriod', true),
          birthday: dateformat(document.getElementById('new-employee-birthday').value, 'longDateWithPeriod', true),
        }
        this.employeeList.push(payload)
        this.employeeListMemory = this.employeeList

        this.showNewEmployeeModal = false
      }
    },
    editEmployee() {
      let success = true

      if (document.getElementById('edit-employee-name').value === '') {
        success = false
        document.getElementById('edit-employee-name-label').style.color = 'red'
        document.getElementById('edit-employee-name').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('edit-employee-name-label').style.color = '#2c3e50'
        document.getElementById('edit-employee-name').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('edit-employee-department').value === '') {
        success = false
        document.getElementById('edit-employee-department-label').style.color = 'red'
        document.getElementById('edit-employee-department').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('edit-employee-department-label').style.color = '#2c3e50'
        document.getElementById('edit-employee-department').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('edit-employee-manager').value === '') {
        success = false
        document.getElementById('edit-employee-manager-label').style.color = 'red'
        document.getElementById('edit-employee-manager').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('edit-employee-manager-label').style.color = '#2c3e50'
        document.getElementById('edit-employee-manager').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('edit-employee-job-title').value === '') {
        success = false
        document.getElementById('edit-employee-job-title-label').style.color = 'red'
        document.getElementById('edit-employee-job-title').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('edit-employee-job-title-label').style.color = '#2c3e50'
        document.getElementById('edit-employee-job-title').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('edit-employee-work-anniversary').value === '') {
        success = false
        document.getElementById('edit-employee-work-anniversary-label').style.color = 'red'
        document.getElementById('edit-employee-work-anniversary').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('edit-employee-work-anniversary-label').style.color = '#2c3e50'
        document.getElementById('edit-employee-work-anniversary').style.border = 'solid 2px #999999'
      }
      if (document.getElementById('edit-employee-birthday').value === '') {
        success = false
        document.getElementById('edit-employee-birthday-label').style.color = 'red'
        document.getElementById('edit-employee-birthday').style.border = 'solid 2px red'
      }
      else {
        document.getElementById('edit-employee-birthday-label').style.color = '#2c3e50'
        document.getElementById('edit-employee-birthday').style.border = 'solid 2px #999999'
      }

      dateformat.masks.longDateWithPeriod = 'mmm. d, yyyy'
      if (success) {
        const payload = {
          name: document.getElementById('edit-employee-name').value,
          department: document.getElementById('edit-employee-department').value,
          manager: document.getElementById('edit-employee-manager').value,
          jobTitle: document.getElementById('edit-employee-job-title').value,
          workAnniversary: dateformat(document.getElementById('edit-employee-work-anniversary').value, 'longDateWithPeriod', true),
          birthday: dateformat(document.getElementById('edit-employee-birthday').value, 'longDateWithPeriod', true),
        }
        for (let item in this.employeeList) {
          let count = item
          if (this.employeeListMemory[item].name.includes(this.selectedEmployeeName)) {
            this.employeeList.splice(count, 1, payload)
            this.employeeListMemory = this.employeeList
            break
          }
        }

        this.showEditModal = false
      }
    },
    deleteEmployee() {
      for (let item in this.employeeList) {
        let count = item
        if (this.employeeListMemory[item].name.includes(this.selectedEmployeeName)) {
          this.employeeList.splice(count, 1)
          this.employeeListMemory = this.employeeList
          break
        }
      }
      this.showDeleteModal = false
    },
    search() {
      this.searchTable = []
      const searchValue = document.getElementById('search-bar').value.toLowerCase()

      for (let item in this.employeeListMemory) {
        switch (this.searchColumn) {
          case '[All]':
            if (this.employeeListMemory[item].name.toLowerCase().includes(searchValue)
              || this.employeeListMemory[item].department.toLowerCase().includes(searchValue)
              || this.employeeListMemory[item].manager.toLowerCase().includes(searchValue)
              || this.employeeListMemory[item].jobTitle.toLowerCase().includes(searchValue)
              || this.employeeListMemory[item].workAnniversary.toLowerCase().includes(searchValue)
              || this.employeeListMemory[item].birthday.toLowerCase().includes(searchValue)) {
                this.searchTable.push(this.employeeListMemory[item])
              }
            break
          case 'Employee Name':
            if (this.employeeListMemory[item].name.toLowerCase().includes(searchValue)) {
              this.searchTable.push(this.employeeListMemory[item])
            }
            break
          case 'Department':
            if (this.employeeListMemory[item].department.toLowerCase().includes(searchValue)) {
              this.searchTable.push(this.employeeListMemory[item])
            }
            break
          case 'Manager':
            if (this.employeeListMemory[item].manager.toLowerCase().includes(searchValue)) {
              this.searchTable.push(this.employeeListMemory[item])
            }
            break
          case 'Job Title':
            if (this.employeeListMemory[item].jobTitle.toLowerCase().includes(searchValue)) {
              this.searchTable.push(this.employeeListMemory[item])
            }
            break
          case 'Work Anniversary':
            if (this.employeeListMemory[item].workAnniversary.toLowerCase().includes(searchValue)) {
              this.searchTable.push(this.employeeListMemory[item])
            }
            break
          case 'Birthday':
            if (this.employeeListMemory[item].birthday.toLowerCase().includes(searchValue)) {
              this.searchTable.push(this.employeeListMemory[item])
            }
            break
          default:
            break
        }
      }

      if (searchValue.length > 0) {
        this.employeeList = this.searchTable
      } else {
        this.employeeList = this.employeeListMemory
      }

      if (this.sortBy !== '') {
        this.setSort()
      }
    },
    setSearchType(type) {
      this.searchColumn = type
      this.searchTypeOpen = false
      document.getElementById('search-bar').value = ''
      this.employeeList = this.employeeListMemory
    },
    setSelectedEmployeeDetails(name, department, manager, jobTitle, workAnniversary, birthday) {
      dateformat.masks.originalDateFormat = 'yyyy-mm-dd'
      this.selectedEmployeeName = name
      this.selectedEmployeeDepartment = department
      this.selectedEmployeeManager = manager
      this.selectedEmployeeJobTitle = jobTitle
      this.selectedEmployeeWorkAnniversary = dateformat(workAnniversary, 'originalDateFormat', true)
      this.selectedEmployeeBirthday = dateformat(birthday, 'originalDateFormat', true)
    },
    setShowEllipsisMenuToTrue() {
      document.getElementById("ellipsis-menu").style.top = `${event.clientY - 60}px`
      this.showEllipsisMenu = true
    },
    setSort(column) {
      if (this.sortBy === column) {
        this.sortAscending = !this.sortAscending
      } else {
        this.sortAscending = true
        this.sortBy = column
      }

      if (this.sortBy === 'Employee Name') {
        if (this.sortAscending) {
          this.employeeList.sort(function (a, b) {
            let x = a.name.toLowerCase()
            let y = b.name.toLowerCase()
              if (x < y) { return -1 }
              if (x > y) { return 1 }
              return 0
          })
        } else {
          this.employeeList.sort(function (a, b) {
            let x = a.name.toLowerCase()
            let y = b.name.toLowerCase()
              if (x < y) { return 1 }
              if (x > y) { return -1 }
              return 0
          })
        }
      }
      if (this.sortBy === 'Department') {
        if (this.sortAscending) {
          this.employeeList.sort(function (a, b) {
            let x = a.department.toLowerCase()
            let y = b.department.toLowerCase()
              if (x < y) { return -1 }
              if (x > y) { return 1 }
              return 0
          })
        } else {
          this.employeeList.sort(function (a, b) {
            let x = a.department.toLowerCase()
            let y = b.department.toLowerCase()
              if (x < y) { return 1 }
              if (x > y) { return -1 }
              return 0
          })
        }
      }
      if (this.sortBy === 'Manager') {
        if (this.sortAscending) {
          this.employeeList.sort(function (a, b) {
            let x = a.manager.toLowerCase()
            let y = b.manager.toLowerCase()
              if (x < y) { return -1 }
              if (x > y) { return 1 }
              return 0
          })
        } else {
          this.employeeList.sort(function (a, b) {
            let x = a.manager.toLowerCase()
            let y = b.manager.toLowerCase()
              if (x < y) { return 1 }
              if (x > y) { return -1 }
              return 0
          })
        }
      }
      if (this.sortBy === 'Job Title') {
        if (this.sortAscending) {
          this.employeeList.sort(function (a, b) {
            let x = a.jobTitle.toLowerCase()
            let y = b.jobTitle.toLowerCase()
              if (x < y) { return -1 }
              if (x > y) { return 1 }
              return 0
          })
        } else {
          this.employeeList.sort(function (a, b) {
            let x = a.jobTitle.toLowerCase()
            let y = b.jobTitle.toLowerCase()
              if (x < y) { return 1 }
              if (x > y) { return -1 }
              return 0
          })
        }
      }
      if (this.sortBy === 'Work Anniversary') {
        if (this.sortAscending) {
          this.employeeList.sort(function (a, b) {
            let x = a.workAnniversary.toLowerCase()
            let y = b.workAnniversary.toLowerCase()
              if (x < y) { return -1 }
              if (x > y) { return 1 }
              return 0
          })
        } else {
          this.employeeList.sort(function (a, b) {
            let x = a.workAnniversary.toLowerCase()
            let y = b.workAnniversary.toLowerCase()
              if (x < y) { return 1 }
              if (x > y) { return -1 }
              return 0
          })
        }
      }
      if (this.sortBy === 'Birthday') {
        if (this.sortAscending) {
          this.employeeList.sort(function (a, b) {
            let x = a.birthday.toLowerCase()
            let y = b.birthday.toLowerCase()
              if (x < y) { return -1 }
              if (x > y) { return 1 }
              return 0
          })
        } else {
          this.employeeList.sort(function (a, b) {
            let x = a.birthday.toLowerCase()
            let y = b.birthday.toLowerCase()
              if (x < y) { return 1 }
              if (x > y) { return -1 }
              return 0
          })
        }
      }
    },
    toggleEditModal() {
      this.showEllipsisMenu = false
      document.getElementById("edit-employee-name").value = this.selectedEmployeeName
      document.getElementById("edit-employee-department").value = this.selectedEmployeeDepartment
      document.getElementById("edit-employee-manager").value = this.selectedEmployeeManager
      document.getElementById("edit-employee-job-title").value = this.selectedEmployeeJobTitle
      document.getElementById("edit-employee-work-anniversary").value = this.selectedEmployeeWorkAnniversary
      document.getElementById("edit-employee-birthday").value = this.selectedEmployeeBirthday
      this.showEditModal = !this.showEditModal
    },
    toggleEllipsisMenu() { this.showEllipsisMenu = !this.showEllipsisMenu },
    toggleDeleteModal() {
      this.showEllipsisMenu = false
      this.showDeleteModal = !this.showDeleteModal
    },
    toggleNewEmployeeModal() { this.showNewEmployeeModal = !this.showNewEmployeeModal },
    toggleSearchBorder() {
      this.borderToggle = !this.borderToggle
      if (this.borderToggle) {
        document.getElementById('search-icon').style.color = '#0066ff'
        document.getElementById('search-bar').style.border = 'solid 2px #0066ff'
      } else {
        document.getElementById('search-icon').style.color = '#999999'
        document.getElementById('search-bar').style.border = 'solid 2px #999999'
      }
    },
    toggleSearchType() { this.searchTypeOpen = !this.searchTypeOpen },
  },
}
</script>

<style>
#the-employee-list {
  padding: 25px;
}

#top-of-body {
  width: 100%;
  height: 65px;
}

.button {
  border: solid 2px #0066ff;
  border-radius: 7px;
  font-weight: bold;
  color: #0066ff;
  padding: 10px 15px;
  width: 150px;
  text-align: center;
  float: right;
}
.button:hover {
  cursor: pointer;
  color: white;
  background: #0066ff;
  transition: 0.3s;
}
.red-button {
  border: solid 2px red;
  color: red
}
.red-button:hover {
  background: red;
  color: white;
}

#table-title {
  display: inline-block;
  width: 50%;
}
#search-area {
  float: right;
  padding-top: 13px;
  margin-right: -15px;
}
#search-area * {
  display: inline-block;
}
#search-type {
  font-weight: bold;
  border: solid 2px #0066ff;
  border-radius: 7px;
  color: #0066ff;
  margin-right: 15px;
  width: 230px;
  padding: 10px 15px;
}
#search-type:hover {
  cursor: pointer;
  background: #0066ff;
  color: white;
  transition: 0.3s;
}
#search-type i {
  position: absolute;
  right: 353px;
  margin-top: -3.5px;
}
.search-type-open {
  border-bottom-left-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}
#search-type-drop {
  position: absolute;
  border: solid 2px #0066ff;
  border-top: none;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  display: block;
  width: 260px;
  background: white;
}
#search-type-drop ul {
  margin-left: -25px;
  width: 100%;
}
#search-type-drop li {
  display: block;
  padding: 5px 10px;
  border-radius: 7px;
  width: 80%;
}
#search-type-drop li:hover {
  cursor: pointer;
  background: #b3d1ff;
}
#search-bar {
  padding: 10px 10px 10px 40px;
  margin-right: 15px;
  border: solid 2px #999999;
  border-radius: 7px;
  width: 300px;
  font-size: 16px;
}
#search-icon {
  color: #999999;
  padding-left: 12px;
  padding-top: 9px;
  position: absolute;
  z-index: 2;
}

input:focus {
  outline: none;
}

#employee-table {
  margin-top: 5px;
  height: 500px;
  overflow: auto;
}
table {
  border-collapse: collapse;
  width: 100%;
}
tr:first-child {
  background: #cccccc !important;
  font-weight: bold;
}
tr:first-child td:hover {
  cursor: pointer;
  color: #0066ff;
}
tr:first-child td i {
  position: relative;
  margin-top: -10px;
}
tr:nth-child(odd) {
  background: #f2f2f2;
}
tr:hover:not(#table-header-row) {
  cursor: pointer;
  background: #b3d1ff;
}
#table-header-row {
  width: 100%;
}
td {
  width: 14.69%;
  padding: 15px;
}
.ellipsis {
  float: right;
  margin-top: -5px;
  border-radius: 50%;
  padding: 2px;
}
.ellipsis:hover {
  cursor: pointer;
  color: white;
  transition-duration: 0.3s;
  background: #0066ff;
}

#ellipsis-menu {
  right: 100px;
  width: 315px;
  height: 75px;
}
.row {
  width: 85%;
  padding: 5px;
}
.row:hover {
  cursor: pointer;
  background: #b3d1ff;
  border-radius: 7px;
  transition: 0.3s;
}
#ellipsis-menu p {
  width: 75%;
  margin: 0;
  padding-left: 15px;
  display: inline-block;
}

.modal {
  padding: 15px;
  border: solid 3px #0066ff;
  border-radius: 7px;
  background: white;
  z-index: 100;
  position: absolute;
}
.close {
  float: right;
  border: solid 2px red;
  border-radius: 50%;
  color: red;
  padding: 2px;
}
.close:hover {
  cursor: pointer;
  border: solid 2px red;
  color: white;
  background: red;
  transition: 0.3s;
}

#delete-modal {
  left: 34%;
  right: 34%;
  top: 38%;
  bottom: 38%;
}
#delete-modal-cancel {
  margin-right: 15px;
}

#new-employee-modal, #edit-employee-modal {
  left: 35%;
  right: 35%;
  top: 20%;
  bottom: 20%;
}
#new-employee-modal-body, #edit-employee-modal-body {
  height: 68%;
  overflow: auto;
}
input {
  padding: 7px;
  border: solid 2px #999999;
  border-radius: 7px;
  font-size: 16px;
  width: 90%;
}
input:focus {
  border: solid 2px #0066ff;
}
input:not(#search-bar) {
  margin-top: 5px;
  margin-bottom: 15px;
}
#new-employee-modal-footer, #edit-employee-modal-footer {
  margin-top: 25px;
}
#new-employee-cancel-btn, #edit-employee-modal-cancel {
  margin-right: 15px;
}
</style>
