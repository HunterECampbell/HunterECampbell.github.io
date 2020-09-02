(function(e){function t(t){for(var o,l,i=t[0],s=t[1],d=t[2],y=0,c=[];y<i.length;y++)l=i[y],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&c.push(a[l][0]),a[l]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(t);while(c.length)c.shift()();return n.push.apply(n,d||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],o=!0,i=1;i<r.length;i++){var s=r[i];0!==a[s]&&(o=!1)}o&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var o={},a={app:0},n=[];function l(t){if(o[t])return o[t].exports;var r=o[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=o,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(r,o,function(t){return e[t]}.bind(null,o));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var m=s;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"00b8":function(e,t,r){},"034f":function(e,t,r){"use strict";var o=r("85ec"),a=r.n(o);a.a},"0e88":function(e,t,r){"use strict";var o=r("00b8"),a=r.n(o);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var o=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e._m(0),r("TheEmployeeList")],1)},n=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"site-header"}},[r("h3",[e._v("Employee Cards")]),r("div",{staticClass:"white-btn"},[e._v("Log Out")])])}],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"the-employee-list"}},[r("div",{attrs:{id:"top-of-body"}},[r("div",{staticClass:"button",on:{click:e.toggleNewEmployeeModal}},[e._v("New Employee")])]),r("div",{attrs:{id:"top-of-table"}},[r("h2",{attrs:{id:"table-title"}},[e._v("Employees")]),r("div",{attrs:{id:"search-area"}},[r("div",{class:{"search-type-open":e.searchTypeOpen},attrs:{id:"search-type"},on:{click:e.toggleSearchType}},[e._v("Search: "+e._s(e.searchColumn)+" "),e.searchTypeOpen?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]),e.searchTypeOpen?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")]):e._e()]),e.searchTypeOpen?r("div",{attrs:{id:"search-type-drop"}},[r("ul",[r("li",{on:{click:function(t){return e.setSearchType("[All]")}}},[e._v("[All]")]),r("li",{on:{click:function(t){return e.setSearchType("Employee Name")}}},[e._v("Employee Name")]),r("li",{on:{click:function(t){return e.setSearchType("Department")}}},[e._v("Department")]),r("li",{on:{click:function(t){return e.setSearchType("Manager")}}},[e._v("Manager")]),r("li",{on:{click:function(t){return e.setSearchType("Job Title")}}},[e._v("Job Title")]),r("li",{on:{click:function(t){return e.setSearchType("Work Anniversary")}}},[e._v("Work Anniversary")]),r("li",{on:{click:function(t){return e.setSearchType("Birthday")}}},[e._v("Birthday")])])]):e._e(),r("i",{staticClass:"material-icons",attrs:{id:"search-icon"}},[e._v("search")]),r("input",{attrs:{type:"search",id:"search-bar",placeholder:"Search Employees..."},on:{blur:e.toggleSearchBorder,focus:e.toggleSearchBorder,keyup:e.search}})])]),r("div",{attrs:{id:"employee-table"}},[r("table",[r("tr",{attrs:{id:"table-header-row"}},[r("td",{on:{click:function(t){return e.setSort("Employee Name")}}},[e._v("Employee Name "),"Employee Name"===e.sortBy&&e.sortAscending?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]):e._e(),"Employee Name"!==e.sortBy||e.sortAscending?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")])]),r("td",{on:{click:function(t){return e.setSort("Department")}}},[e._v("Department "),"Department"===e.sortBy&&e.sortAscending?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]):e._e(),"Department"!==e.sortBy||e.sortAscending?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")])]),r("td",{on:{click:function(t){return e.setSort("Manager")}}},[e._v("Manager "),"Manager"===e.sortBy&&e.sortAscending?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]):e._e(),"Manager"!==e.sortBy||e.sortAscending?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")])]),r("td",{on:{click:function(t){return e.setSort("Job Title")}}},[e._v("Job Title "),"Job Title"===e.sortBy&&e.sortAscending?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]):e._e(),"Job Title"!==e.sortBy||e.sortAscending?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")])]),r("td",{on:{click:function(t){return e.setSort("Work Anniversary")}}},[e._v("Work Anniversary "),"Work Anniversary"===e.sortBy&&e.sortAscending?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]):e._e(),"Work Anniversary"!==e.sortBy||e.sortAscending?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")])]),r("td",{on:{click:function(t){return e.setSort("Birthday")}}},[e._v("Birthday "),"Birthday"===e.sortBy&&e.sortAscending?r("i",{staticClass:"material-icons"},[e._v("arrow_drop_down")]):e._e(),"Birthday"!==e.sortBy||e.sortAscending?e._e():r("i",{staticClass:"material-icons"},[e._v("arrow_drop_up")])])]),e._l(e.employeeList,(function(t,o){return r("tr",{key:o},[r("td",[e._v(e._s(t.name))]),r("td",[e._v(e._s(t.department))]),r("td",[e._v(e._s(t.manager))]),r("td",[e._v(e._s(t.jobTitle))]),r("td",[e._v(e._s(t.workAnniversary))]),r("td",[e._v(e._s(t.birthday)+" "),r("i",{staticClass:"material-icons ellipsis",on:{click:function(r){e.setSelectedEmployeeDetails(t.name,t.department,t.manager,t.jobTitle,t.workAnniversary,t.birthday),e.setShowEllipsisMenuToTrue()}}},[e._v("more_horiz ")])])])}))],2)]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showEllipsisMenu,expression:"showEllipsisMenu"}],staticClass:"modal",attrs:{id:"ellipsis-menu"}},[r("i",{staticClass:"material-icons close",on:{click:e.toggleEllipsisMenu}},[e._v("close")]),r("div",{staticClass:"row",attrs:{id:"edit-row"},on:{click:e.toggleEditModal}},[r("i",{staticClass:"material-icons"},[e._v("edit")]),r("p",[e._v('Edit "'+e._s(e.selectedEmployeeName)+'"')])]),r("div",{staticClass:"row",attrs:{id:"delete-row"},on:{click:e.toggleDeleteModal}},[r("i",{staticClass:"material-icons"},[e._v("delete")]),r("p",[e._v('Delete "'+e._s(e.selectedEmployeeName)+'"')])])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showEditModal,expression:"showEditModal"}],staticClass:"modal",attrs:{id:"edit-employee-modal"}},[r("i",{staticClass:"material-icons close",on:{click:e.toggleEditModal}},[e._v("close")]),r("h3",[e._v('Edit "'+e._s(this.selectedEmployeeName)+'"')]),e._m(0),r("div",{attrs:{id:"edit-employee-modal-footer"}},[r("div",{staticClass:"button",on:{click:e.editEmployee}},[e._v("Save")]),r("div",{staticClass:"button",attrs:{id:"edit-employee-modal-cancel"},on:{click:e.toggleEditModal}},[e._v("Cancel")])])]),e.showDeleteModal?r("div",{staticClass:"modal",attrs:{id:"delete-modal"}},[r("h3",[e._v('Delete "'+e._s(this.selectedEmployeeName)+'"')]),r("p",[e._v('Are you sure you want to delete "'+e._s(this.selectedEmployeeName)+'"?')]),r("div",{attrs:{id:"delete-modal-footer"}},[r("div",{staticClass:"button red-button",on:{click:e.deleteEmployee}},[e._v("Delete")]),r("div",{staticClass:"button",attrs:{id:"delete-modal-cancel"},on:{click:e.toggleDeleteModal}},[e._v("Cancel")])])]):e._e(),e.showNewEmployeeModal?r("div",{staticClass:"modal",attrs:{id:"new-employee-modal"}},[r("i",{staticClass:"material-icons close",on:{click:e.toggleNewEmployeeModal}},[e._v("close")]),r("h3",{attrs:{id:"new-employee-modal-title"}},[e._v("Create New Employee")]),e._m(1),r("div",{attrs:{id:"new-employee-modal-footer"}},[r("div",{staticClass:"button",attrs:{id:"new-employee-add-btn"},on:{click:e.addNewEmployee}},[e._v("Add")]),r("div",{staticClass:"button",attrs:{id:"new-employee-cancel-btn"},on:{click:e.toggleNewEmployeeModal}},[e._v("Cancel")])])]):e._e()])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"edit-employee-modal-body"}},[r("form",[r("label",{attrs:{for:"name",id:"edit-employee-name-label"}},[e._v("Name")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"edit-employee-name",name:"name"}}),r("label",{attrs:{for:"department",id:"edit-employee-department-label"}},[e._v("Department")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"edit-employee-department",name:"department"}}),r("label",{attrs:{for:"manager",id:"edit-employee-manager-label"}},[e._v("Manager")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"edit-employee-manager",name:"manager"}}),r("label",{attrs:{for:"job-title",id:"edit-employee-job-title-label"}},[e._v("Job Title")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"edit-employee-job-title",name:"job-title"}}),r("label",{attrs:{for:"work-anniversary",id:"edit-employee-work-anniversary-label"}},[e._v("Work Anniversary")]),r("input",{staticClass:"input-border",attrs:{type:"date",id:"edit-employee-work-anniversary",name:"work-anniversary",pattern:"\\d"}}),r("label",{attrs:{for:"birthday",id:"edit-employee-birthday-label"}},[e._v("Birthday")]),r("input",{staticClass:"input-border",attrs:{type:"date",id:"edit-employee-birthday",name:"birthday"}})])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"new-employee-modal-body"}},[r("form",[r("label",{attrs:{for:"name",id:"new-employee-name-label"}},[e._v("Name")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"new-employee-name",name:"name"}}),r("label",{attrs:{for:"department",id:"new-employee-department-label"}},[e._v("Department")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"new-employee-department",name:"department"}}),r("label",{attrs:{for:"manager",id:"new-employee-manager-label"}},[e._v("Manager")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"new-employee-manager",name:"manager"}}),r("label",{attrs:{for:"job-title",id:"new-employee-job-title-label"}},[e._v("Job Title")]),r("input",{staticClass:"input-border",attrs:{type:"text",id:"new-employee-job-title",name:"job-title"}}),r("label",{attrs:{for:"work-anniversary",id:"new-employee-work-anniversary-label"}},[e._v("Work Anniversary")]),r("input",{staticClass:"input-border",attrs:{type:"date",id:"new-employee-work-anniversary",name:"work-anniversary",pattern:"\\d"}}),r("label",{attrs:{for:"birthday",id:"new-employee-birthday-label"}},[e._v("Birthday")]),r("input",{staticClass:"input-border",attrs:{type:"date",id:"new-employee-birthday",name:"birthday"}})])])}],s=(r("caad"),r("a434"),r("b0c0"),r("2532"),r("b9b9")),d=r.n(s),m={name:"TheEmployeeList",data:function(){return{borderToggle:!1,employeeList:[],employeeListOriginal:[{name:"Billy Joel",department:"Entertainment",manager:"Self",jobTitle:"Musician",workAnniversary:"Jan. 1, 1970",birthday:"May 9, 1949"},{name:"Tony Stark (Stank)",department:"Engineering",manager:"Self",jobTitle:"Iron Man",workAnniversary:"May 29, 1970",birthday:"May 29, 1970"},{name:"John Cena",department:"Entertainment",manager:"Self",jobTitle:"Wrestler",workAnniversary:"Nov. 5, 1999",birthday:"Apr. 23, 1977"},{name:"Weird Al Yankovic",department:"Entertainment",manager:"Self",jobTitle:"Singer",workAnniversary:"Jan. 1, 1976",birthday:"Oct. 23, 1959"},{name:"Perry the Platapus",department:"Entertainment",manager:"Cartoon Network",jobTitle:"Cartoon",workAnniversary:"Jan. 1, 2007",birthday:"Jan. 1, 2002"},{name:"Mark Ruffalo",department:"Entertainment",manager:"Self",jobTitle:"Actor",workAnniversary:"Jan. 1, 1989",birthday:"Nov. 22, 1967"},{name:"Chuck Norris",department:"Martial Arts",manager:"Self",jobTitle:"Martial Artist",workAnniversary:"Jan. 1, 1968",birthday:"Mar. 10, 1940"},{name:"Bruce Lee",department:"Martial Arts",manager:"Self",jobTitle:"Martial Artist",workAnniversary:"Apr. 1, 1990",birthday:"Nov. 27, 1940"},{name:"Lorenz Matthews",department:"Food",manager:"Bill Corzen",jobTitle:"Chef",workAnniversary:"Jul. 5, 2018",birthday:"May 4, 1980"},{name:"Bill Corzen",department:"Food",manager:"Self",jobTitle:"Head Chef",workAnniversary:"Aug. 14, 2010",birthday:"Jun. 9, 2000"},{name:"Bill Nye",department:"Research",manager:"Self",jobTitle:"Scientist",workAnniversary:"Jul. 5, 1996",birthday:"Nov. 27, 1955"},{name:"Killian League",department:"Human Resources",manager:"Francis Rose",jobTitle:"HR Representative",workAnniversary:"Feb. 21, 2018",birthday:"Apr. 17, 1978"},{name:"Love Harring",department:"Human Resources",manager:"Francis Rose",jobTitle:"HR Representative",workAnniversary:"Dec. 9, 2019",birthday:"Jul. 10, 1996"},{name:"Francis Rose",department:"Human Resources",manager:"Joel Livingston",jobTitle:"HR Manager",workAnniversary:"Jan. 20, 2012",birthday:"Oct. 8, 1976"},{name:"Joel Livingston",department:"Executives",manager:"Self",jobTitle:"CEO",workAnniversary:"Nov. 12, 2011",birthday:"Jul. 15, 1983"},{name:"Larz Rudolf",department:"Sales",manager:"Terra Dactyl",jobTitle:"Sales Representative",workAnniversary:"Mar. 12, 2019",birthday:"Apr. 5, 2001"},{name:"Terra Dactyl",department:"Sales",manager:"Ron Rolley",jobTitle:"Sales Manager",workAnniversary:"Aug. 23, 2016",birthday:"Mar. 3, 1999"},{name:"Ron Rolley",department:"Sales",manager:"Joel Livingston",jobTitle:"Strategic Partnerships Manager",workAnniversary:"Jul. 19, 2014",birthday:"Apr. 12, 1966"},{name:"Mace Windu",department:"Security",manager:"Yoda",jobTitle:"Jedi Master",workAnniversary:"Jan. 1, 1990",birthday:"Jan. 1 1940"},{name:"Yoda",department:"Security",manager:"Self",jobTitle:"Jedi Grand Master",workAnniversary:"Jan. 1, 1990",birthday:"Jan. 1, 1090"},{name:"Obi-Wan Kenobi",department:"Security",manager:"Yoda",jobTitle:"Jedi Master",workAnniversary:"Jan. 1, 1990",birthday:"Jan. 1 1950"},{name:"Ron Weasley",department:"Research",manager:"Self",jobTitle:"Wizard",workAnniversary:"Aug. 14, 1991",birthday:"Mar. 1, 1980"},{name:"Hermione Granger",department:"Research",manager:"Self",jobTitle:"Witch",workAnniversary:"Aug. 14, 1991",birthday:"Sep. 17, 1979"},{name:"Harry Potter",department:"Research",manager:"Self",jobTitle:"Wizard",workAnniversary:"Aug. 14, 1991",birthday:"Jul. 31, 1980"},{name:"Tammy Longstrider",department:"Sales",manager:"Ron Rolley",jobTitle:"Sales Representative",workAnniversary:"Aug. 15, 2019",birthday:"Jan. 14, 1996"},{name:"Tina Tan",department:"Sales",manager:"Ron Rolley",jobTitle:"Sales Representative",workAnniversary:"Feb. 10, 2020",birthday:"Nov. 19, 1994"}],employeeListMemory:[],searchColumn:"[All]",searchTable:[],searchTypeOpen:!1,selectedEmployeeName:"",selectedEmployeeDepartment:"",selectedEmployeeManager:"",selectedEmployeeJobTitle:"",selectedEmployeeWorkAnniversary:"",selectedEmployeeBirthday:"",showEditModal:!1,showEllipsisMenu:!1,showDeleteModal:!1,showNewEmployeeModal:!1,sortAscending:!0,sortBy:""}},created:function(){this.employeeList=this.employeeListOriginal,this.employeeListMemory=this.employeeList},methods:{addNewEmployee:function(){var e=!0;if(""===document.getElementById("new-employee-name").value?(e=!1,document.getElementById("new-employee-name-label").style.color="red",document.getElementById("new-employee-name").style.border="solid 2px red"):(document.getElementById("new-employee-name-label").style.color="#2c3e50",document.getElementById("new-employee-name").style.border="solid 2px #999999"),""===document.getElementById("new-employee-department").value?(e=!1,document.getElementById("new-employee-department-label").style.color="red",document.getElementById("new-employee-department").style.border="solid 2px red"):(document.getElementById("new-employee-department-label").style.color="#2c3e50",document.getElementById("new-employee-department").style.border="solid 2px #999999"),""===document.getElementById("new-employee-manager").value?(e=!1,document.getElementById("new-employee-manager-label").style.color="red",document.getElementById("new-employee-manager").style.border="solid 2px red"):(document.getElementById("new-employee-manager-label").style.color="#2c3e50",document.getElementById("new-employee-manager").style.border="solid 2px #999999"),""===document.getElementById("new-employee-job-title").value?(e=!1,document.getElementById("new-employee-job-title-label").style.color="red",document.getElementById("new-employee-job-title").style.border="solid 2px red"):(document.getElementById("new-employee-job-title-label").style.color="#2c3e50",document.getElementById("new-employee-job-title").style.border="solid 2px #999999"),""===document.getElementById("new-employee-work-anniversary").value?(e=!1,document.getElementById("new-employee-work-anniversary-label").style.color="red",document.getElementById("new-employee-work-anniversary").style.border="solid 2px red"):(document.getElementById("new-employee-work-anniversary-label").style.color="#2c3e50",document.getElementById("new-employee-work-anniversary").style.border="solid 2px #999999"),""===document.getElementById("new-employee-birthday").value?(e=!1,document.getElementById("new-employee-birthday-label").style.color="red",document.getElementById("new-employee-birthday").style.border="solid 2px red"):(document.getElementById("new-employee-birthday-label").style.color="#2c3e50",document.getElementById("new-employee-birthday").style.border="solid 2px #999999"),d.a.masks.longDateWithPeriod="mmm. d, yyyy",e){var t={name:document.getElementById("new-employee-name").value,department:document.getElementById("new-employee-department").value,manager:document.getElementById("new-employee-manager").value,jobTitle:document.getElementById("new-employee-job-title").value,workAnniversary:d()(document.getElementById("new-employee-work-anniversary").value,"longDateWithPeriod",!0),birthday:d()(document.getElementById("new-employee-birthday").value,"longDateWithPeriod",!0)};this.employeeList.push(t),this.employeeListMemory=this.employeeList,this.showNewEmployeeModal=!1}},editEmployee:function(){var e=!0;if(""===document.getElementById("edit-employee-name").value?(e=!1,document.getElementById("edit-employee-name-label").style.color="red",document.getElementById("edit-employee-name").style.border="solid 2px red"):(document.getElementById("edit-employee-name-label").style.color="#2c3e50",document.getElementById("edit-employee-name").style.border="solid 2px #999999"),""===document.getElementById("edit-employee-department").value?(e=!1,document.getElementById("edit-employee-department-label").style.color="red",document.getElementById("edit-employee-department").style.border="solid 2px red"):(document.getElementById("edit-employee-department-label").style.color="#2c3e50",document.getElementById("edit-employee-department").style.border="solid 2px #999999"),""===document.getElementById("edit-employee-manager").value?(e=!1,document.getElementById("edit-employee-manager-label").style.color="red",document.getElementById("edit-employee-manager").style.border="solid 2px red"):(document.getElementById("edit-employee-manager-label").style.color="#2c3e50",document.getElementById("edit-employee-manager").style.border="solid 2px #999999"),""===document.getElementById("edit-employee-job-title").value?(e=!1,document.getElementById("edit-employee-job-title-label").style.color="red",document.getElementById("edit-employee-job-title").style.border="solid 2px red"):(document.getElementById("edit-employee-job-title-label").style.color="#2c3e50",document.getElementById("edit-employee-job-title").style.border="solid 2px #999999"),""===document.getElementById("edit-employee-work-anniversary").value?(e=!1,document.getElementById("edit-employee-work-anniversary-label").style.color="red",document.getElementById("edit-employee-work-anniversary").style.border="solid 2px red"):(document.getElementById("edit-employee-work-anniversary-label").style.color="#2c3e50",document.getElementById("edit-employee-work-anniversary").style.border="solid 2px #999999"),""===document.getElementById("edit-employee-birthday").value?(e=!1,document.getElementById("edit-employee-birthday-label").style.color="red",document.getElementById("edit-employee-birthday").style.border="solid 2px red"):(document.getElementById("edit-employee-birthday-label").style.color="#2c3e50",document.getElementById("edit-employee-birthday").style.border="solid 2px #999999"),d.a.masks.longDateWithPeriod="mmm. d, yyyy",e){var t={name:document.getElementById("edit-employee-name").value,department:document.getElementById("edit-employee-department").value,manager:document.getElementById("edit-employee-manager").value,jobTitle:document.getElementById("edit-employee-job-title").value,workAnniversary:d()(document.getElementById("edit-employee-work-anniversary").value,"longDateWithPeriod",!0),birthday:d()(document.getElementById("edit-employee-birthday").value,"longDateWithPeriod",!0)};for(var r in this.employeeList){var o=r;if(this.employeeListMemory[r].name.includes(this.selectedEmployeeName)){this.employeeList.splice(o,1,t),this.employeeListMemory=this.employeeList;break}}this.showEditModal=!1}},deleteEmployee:function(){for(var e in this.employeeList){var t=e;if(this.employeeListMemory[e].name.includes(this.selectedEmployeeName)){this.employeeList.splice(t,1),this.employeeListMemory=this.employeeList;break}}this.showDeleteModal=!1},search:function(){this.searchTable=[];var e=document.getElementById("search-bar").value.toLowerCase();for(var t in this.employeeListMemory)switch(this.searchColumn){case"[All]":(this.employeeListMemory[t].name.toLowerCase().includes(e)||this.employeeListMemory[t].department.toLowerCase().includes(e)||this.employeeListMemory[t].manager.toLowerCase().includes(e)||this.employeeListMemory[t].jobTitle.toLowerCase().includes(e)||this.employeeListMemory[t].workAnniversary.toLowerCase().includes(e)||this.employeeListMemory[t].birthday.toLowerCase().includes(e))&&this.searchTable.push(this.employeeListMemory[t]);break;case"Employee Name":this.employeeListMemory[t].name.toLowerCase().includes(e)&&this.searchTable.push(this.employeeListMemory[t]);break;case"Department":this.employeeListMemory[t].department.toLowerCase().includes(e)&&this.searchTable.push(this.employeeListMemory[t]);break;case"Manager":this.employeeListMemory[t].manager.toLowerCase().includes(e)&&this.searchTable.push(this.employeeListMemory[t]);break;case"Job Title":this.employeeListMemory[t].jobTitle.toLowerCase().includes(e)&&this.searchTable.push(this.employeeListMemory[t]);break;case"Work Anniversary":this.employeeListMemory[t].workAnniversary.toLowerCase().includes(e)&&this.searchTable.push(this.employeeListMemory[t]);break;case"Birthday":this.employeeListMemory[t].birthday.toLowerCase().includes(e)&&this.searchTable.push(this.employeeListMemory[t]);break;default:break}e.length>0?this.employeeList=this.searchTable:this.employeeList=this.employeeListMemory,""!==this.sortBy&&this.setSort()},setSearchType:function(e){this.searchColumn=e,this.searchTypeOpen=!1,document.getElementById("search-bar").value="",this.employeeList=this.employeeListMemory},setSelectedEmployeeDetails:function(e,t,r,o,a,n){d.a.masks.originalDateFormat="yyyy-mm-dd",this.selectedEmployeeName=e,this.selectedEmployeeDepartment=t,this.selectedEmployeeManager=r,this.selectedEmployeeJobTitle=o,this.selectedEmployeeWorkAnniversary=d()(a,"originalDateFormat",!0),this.selectedEmployeeBirthday=d()(n,"originalDateFormat",!0)},setShowEllipsisMenuToTrue:function(){document.getElementById("ellipsis-menu").style.top="".concat(event.clientY-60,"px"),this.showEllipsisMenu=!0},setSort:function(e){this.sortBy===e?this.sortAscending=!this.sortAscending:(this.sortAscending=!0,this.sortBy=e),"Employee Name"===this.sortBy&&(this.sortAscending?this.employeeList.sort((function(e,t){var r=e.name.toLowerCase(),o=t.name.toLowerCase();return r<o?-1:r>o?1:0})):this.employeeList.sort((function(e,t){var r=e.name.toLowerCase(),o=t.name.toLowerCase();return r<o?1:r>o?-1:0}))),"Department"===this.sortBy&&(this.sortAscending?this.employeeList.sort((function(e,t){var r=e.department.toLowerCase(),o=t.department.toLowerCase();return r<o?-1:r>o?1:0})):this.employeeList.sort((function(e,t){var r=e.department.toLowerCase(),o=t.department.toLowerCase();return r<o?1:r>o?-1:0}))),"Manager"===this.sortBy&&(this.sortAscending?this.employeeList.sort((function(e,t){var r=e.manager.toLowerCase(),o=t.manager.toLowerCase();return r<o?-1:r>o?1:0})):this.employeeList.sort((function(e,t){var r=e.manager.toLowerCase(),o=t.manager.toLowerCase();return r<o?1:r>o?-1:0}))),"Job Title"===this.sortBy&&(this.sortAscending?this.employeeList.sort((function(e,t){var r=e.jobTitle.toLowerCase(),o=t.jobTitle.toLowerCase();return r<o?-1:r>o?1:0})):this.employeeList.sort((function(e,t){var r=e.jobTitle.toLowerCase(),o=t.jobTitle.toLowerCase();return r<o?1:r>o?-1:0}))),"Work Anniversary"===this.sortBy&&(this.sortAscending?this.employeeList.sort((function(e,t){var r=e.workAnniversary.toLowerCase(),o=t.workAnniversary.toLowerCase();return r<o?-1:r>o?1:0})):this.employeeList.sort((function(e,t){var r=e.workAnniversary.toLowerCase(),o=t.workAnniversary.toLowerCase();return r<o?1:r>o?-1:0}))),"Birthday"===this.sortBy&&(this.sortAscending?this.employeeList.sort((function(e,t){var r=e.birthday.toLowerCase(),o=t.birthday.toLowerCase();return r<o?-1:r>o?1:0})):this.employeeList.sort((function(e,t){var r=e.birthday.toLowerCase(),o=t.birthday.toLowerCase();return r<o?1:r>o?-1:0})))},toggleEditModal:function(){this.showEllipsisMenu=!1,document.getElementById("edit-employee-name").value=this.selectedEmployeeName,document.getElementById("edit-employee-department").value=this.selectedEmployeeDepartment,document.getElementById("edit-employee-manager").value=this.selectedEmployeeManager,document.getElementById("edit-employee-job-title").value=this.selectedEmployeeJobTitle,document.getElementById("edit-employee-work-anniversary").value=this.selectedEmployeeWorkAnniversary,document.getElementById("edit-employee-birthday").value=this.selectedEmployeeBirthday,this.showEditModal=!this.showEditModal},toggleEllipsisMenu:function(){this.showEllipsisMenu=!this.showEllipsisMenu},toggleDeleteModal:function(){this.showEllipsisMenu=!1,this.showDeleteModal=!this.showDeleteModal},toggleNewEmployeeModal:function(){this.showNewEmployeeModal=!this.showNewEmployeeModal},toggleSearchBorder:function(){this.borderToggle=!this.borderToggle,this.borderToggle?(document.getElementById("search-icon").style.color="#0066ff",document.getElementById("search-bar").style.border="solid 2px #0066ff"):(document.getElementById("search-icon").style.color="#999999",document.getElementById("search-bar").style.border="solid 2px #999999")},toggleSearchType:function(){this.searchTypeOpen=!this.searchTypeOpen}}},y=m,c=(r("0e88"),r("2877")),p=Object(c["a"])(y,l,i,!1,null,null,null),u=p.exports,h={name:"App",components:{TheEmployeeList:u}},b=h,v=(r("034f"),Object(c["a"])(b,a,n,!1,null,null,null)),g=v.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.d54b71a5.js.map