版本号：1.0.003beta
发布日期：(未发布)

修改内容：
1、grid:增加不显示总记录数的功能,需要配置ignoreTotalBusiness=true的配置，如果涉及到diypager的场景，diypager中的class为mini-pagernototal。
2、mothpick:鼠标双击可以进行选中，无需点击确定按钮。
3、buttonedit:调用mini.removeChildUI后，会出现tooltip不消失的问题。
4、buttonedit:当2个buttonedit组件并排时，tooltip上的小箭头会跑偏。
5、event:在clearEvent，findListener，mini_un，mini_on方法中，增加对于jquery(el)=null/undefind和length==0的判断。
6、fileupload:修改在文件大小提示中***b的提示内容，改为MB。
7、moneybox:解决在ie8下4舍5入错误的问题。
8、datagrid:解决在ie8下datatype为currency|float，配置decimalPlaces后出现的4舍5入错误的问题。
9、datagrid:在汇总信息，格式对于float,int,currency,percent进行支持。
10、form:reset,clear方法不会触发valuechange事件，现改为触发。


版本号：1.0.002
发布日期:2015-05-28

修改内容：
1、grid:针对开启行编辑的使用场景，新增validateEditors()和isEditorsValid()两个方法，来实现对表格内的所有编辑框做校验的功能。
2、fileupload:解决在发生文件大小，文件类型，空文件等原因引起的错误提示后，输入框还是上一次选择的文件，现改为清空。
3、fileupload:在flash9下运行会导致ie崩溃，所以增加flash版本的校验，如果版本低于10，给出升级的提示。
4、grid:在pagechanged事件中，可以通过修改cancel属性来阻止翻页。
5、window:为了解决active控件的穿透问题，增加iframe垫片来遮挡active控件，此功能通过全局变量mini_useShims配置来开启。
6、combobox:在开启多选时，增加showColumns配置，可以列表显示头部。
7、fileupload:增加了下载更新的功能，当客户flashplay版本低于10时，会弹出更新提示，安装文件需要放在swfupload.js同目录下,文件名为flashPlayerSetup.zip，如要选择其他文件，可以配置updateFileName属性来指定文件名。
8、fileupload:将下载更新提示和未安装flash提示改为鼠标点击时才触发。
9、treeselect:在单选的情况下，如果在beforenodeselect事件中，cancel=true后，弹出框任然会被关闭，现改为不关闭”
10、datagrid:解决存在冻结列时，滚动条拖拽后再进行翻页，列信息错误的问题。
11、listbox:新增emptyText and showEmpty的配置。
12、datagrid:新增showButtonText和showButtonIcon的配置。





版本号：1.0.001
发布日期：2015-03-06

修改内容：
1、grid:displayField配置遇到类似vo.name类型时，无法正确显示。
2、grid:若editor配置为mini-checklist时，无法赋值.
3、treegrid:修改文件夹展开后图标不变的问题。
4、treeselect:弹出层中，输入查询字符后回车，弹出层关闭。
5、treeselect:如果开启查询功能，那么再弹窗关闭前，需要清空查询条件。
6、tree:新增checkOpposite配置，让父子节点互斥选择。
7、tree:新增checkOpposite配置，让父子节点互斥选择。
8、grid:修复当setReadOnly(true)后，开启行编辑的行任然可以操作的问题。
9、grid:单元格渲染格式化时，新增dateType=int和float的支持，之前dateType=int和float只是在排序时期作用。
10、buttonedit:修复点击图标时就触发校验的问题。
11、treeselect：搜索功能未进行前后空格的过滤（trim）导致复制文字搜索时不方便。
12、listbox：在IE下有滚动条时出现列错位。


版本号：1.0.000(miniui拥有独立的版本号)
发布日期：2015-01-21

修改内容：
1、grid:virtualScroll="true"时，当未加载数据，且存在横向滚动条情况，滚动条无法拖到最右侧。
2、grid:当没有数据时，在chrome下列数量超出后无横向滚动条。
3、fileUpload：解决setLimitType后，选择框中的文件类型显示不正确。
4、grid:列配置为百分比显示：type=percent后，遇到负值时排序不正常。










