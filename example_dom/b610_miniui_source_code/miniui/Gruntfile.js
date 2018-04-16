/*!
 * Bootstrap's Gruntfile
 * http://getbootstrap.com
 * Copyright 2013-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

module.exports = function (grunt) {
    grunt.file.preserveBOM = true;
    grunt.file.defaultEncoding = 'UTF-8';
    // Project configuration.
    grunt.initConfig({

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*\n' +
            ' * miniui v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' */\n',
        dist:'dist',
        // Task configuration.
        clean: {
			dist: ['dist']
        },


        concat: {
            options: {
                banner: '<%= banner %>\n',
                separator: '\r\n',
                stripBanners: false
            },
            miniui: {
                src: [
                    'js/core/mini.js',
                    'js/core/config.js',
                    'js/utils/ua.js',
                    'js/utils/Array.js',
                    'js/utils/Date.js',
                    'js/utils/DateUtils.js',
                    'js/utils/Cookie.js',
                    'js/utils/htmlCode.js',
                    'js/utils/JSON.js',
                    'js/utils/key.js',
                    'js/utils/String.js',
                    'js/utils/util.js',
                    'js/utils/UUID.js',
                    'js/core/Event.js',
                    'js/core/defaultEvent.js',
                    'js/core/Drag.js',
                    'js/core/load.js',
                    'js/core/mask.js',
                    'js/core/Columns.js',
                    'js/core/parse.js',
                    'js/core/run.js',
                    'js/core/validate.js',
                    'js/core/resizer.js',
                    'js/components/Component/Component.js',
                    'js/components/Component/Control.js',
                    'js/components/Component/Container.js',
                    'js/components/Component/ValidatorBase.js',
                    'js/components/Component/ListControl.js',
                    'js/components/CheckBox/CheckBox.js',
                    'js/components/CheckBox/CheckBoxList.js',
                    'js/components/Box/Box.js',
                    'js/components/Button/Button.js',
                    'js/components/Button/ButtonEdit.js',
                    'js/components/Button/ButtonEditTip.js',
                    'js/components/Calendar/Calendar.js',
                    'js/components/Calendar/CalendarYear.js',
                    'js/components/DataSet/DataSet.js',
                    'js/components/FileUpload/FileUpload.js',
                    'js/components/Fit/Fit.js',
                    'js/components/GridEditor/GridEditor.js',
                    'js/components/Form/Form.js',
                    'js/components/Hidden/Hidden.js',
                    'js/components/HtmlFile/HtmlFile.js',
                    'js/components/Include/Include.js',
                    'js/components/Layout/Layout.js',
                    'js/components/ListBox/ListBox.js',
                    'js/components/Popup/Popup.js',
                    'js/components/Lookup/OutlookBar.js',
                    'js/components/Menu/MenuItem.js',
                    'js/components/Menu/MenuButton.js',
                    'js/components/Menu/Menu.js',
                    'js/components/Menu/MenuBar.js',
                    'js/components/Lookup/OutlookMenu.js',
                    'js/components/ContextMenu/ContextMenu.js',
                    'js/components/DataBinding/DataBinding.js',
                    'js/components/MessageBox/MessageBox.js',
                    'js/components/NavBar/NavBar.js',
                    'js/components/NavBar/NavBarMenu.js',
                    'js/components/Panel/Panel.js',
                    'js/components/TextBox/TextBox.js',
                    'js/components/TextBox/MoneyBox.js',
                    'js/components/Password/Password.js',
                    'js/components/Popup/PopupEdit.js',
                    'js/components/DatePicker/DatePicker.js',
                    'js/components/DatePicker/MonthPicker.js',
                    'js/components/DatePicker/YearPicker.js',
                    'js/components/ComboBox/ComboBox.js',
                    'js/components/AutoComplete/AutoComplete.js',
                    'js/components/Lookup/Lookup.js',
                    'js/components/Pager/Pager.js',
					'js/components/Pager/PagerNoTotal.js',
                    'js/components/DataGrid/DataGrid.js',
                    'js/components/DataGrid/GridTools.js',
                    'js/components/RadioButtonList/RadioButtonList.js',
                    'js/components/Spinner/Spinner.js',
                    'js/components/SplitButton/SplitButton.js',
                    'js/components/Splitter/Splitter.js',
                    'js/components/Tabs/Tabs.js',
                    'js/components/TextArea/TextArea.js',
                    'js/components/TextBox/TextBoxList.js',
                    'js/components/TimeSpinner/TimeSpinner.js',
                    'js/components/ToolBar/ToolBar.js',
                    'js/components/Tree/Tree.js',
                    'js/components/TreeGrid/TreeGrid.js',
                    'js/components/TreeSelect/TreeSelect.js',
                    'js/components/Window/Window.js',
                    'js/components/Lookup/OutlookTree.js',
                    'js/components/NavBar/NavBarTree.js',
                    'js/components/Separator/Separator.js',
                    'js/components/Tooltip/Tooltip.js',
                    'js/core/plugin.js',
                    'js/components/TreeSelect/TreeSelectQuery.js',
                    'js/locale/zh_CN.js',
                    'js/utils/requireJs.js'
                ],
                dest: '<%=dist%>/<%= pkg.name %>-all-source.js'
            }
        },
        comments: {
            miniui: {
                options: {
                    singleline: true,
                    multiline: true
                },
                src: '<%= concat.miniui.dest %>'
            }
        },
        uglify: {
            options: {
                report: 'min'
            },
            miniui: {
                options: {
                    banner: '<%= banner %>',
                    beautify: {
                        ascii_only: true
                    }
                },
                src: '<%= concat.miniui.dest %>',
                dest: '<%=dist%>/<%= pkg.name %>-all-min.js'
            }
        },

        jshint: {
            all: {
                src: 'js/**/*.js',
                options: {
                    bitwise: true,
                    camelcase: true,
                    curly: true,
                    eqeqeq: true,
                    forin: true,
                    immed: true,
                    indent: 4,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    noempty: true,
                    nonew: true,
                    regexp: true,
                    undef: true,
                    unused: true,
                    trailing: true,
                    maxlen: 120
                }
            }
        },

        cssmin: {
            options : {
                compatibility : 'ie8' //设置兼容模式
            },
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css','*/*.css'],
                    dest: '<%=dist%>/themes/',
                    ext: '.min.css'
                }]
            }
        },

        copy: {
            css: {
                cwd: 'css',
                expand: true,
                src: [ '**' ],
                dest: '<%=dist%>/themes/'
            },
            releaseJs: {
                cwd: '<%=dist%>',
                expand: true,
                src: [ '**' ],
                dest: 'C:/Program Files (x86)/Apache Software Foundation/Tomcat 7.0/webapps/sywebsite/assets/scripts/sui/miniui'
            }
        }


    });


    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.registerTask('jshint-js', ['jshint']);

    grunt.registerTask('clean-dist', ['clean']);
    grunt.registerTask('concat-js', ['concat']);
    grunt.registerTask('removeComments', ['comments']);


    grunt.registerTask('releaseJs', ['releaseJs']);

    grunt.registerTask('css-min', ['cssmin']);
    // JS distribution task.



    //default
    grunt.registerTask('build', ['clean', 'concat','uglify','cssmin','copy']);


};
