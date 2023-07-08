import { ItemModel } from './../model/item.model';
import { Component, OnInit } from '@angular/core';
import { DATA1 } from '../const/data1.const';
import { DATA2 } from '../const/data2.const';
import { DATA3 } from '../const/data3.const';
import { DATA4 } from '../const/data4.const';
import { DATA5 } from '../const/data5.const';
import { DATA6 } from '../const/data6.const';
import { DATA7 } from '../const/data7.const';
import { DATA8 } from '../const/data8.const';

const DATAARR = [DATA1, DATA2, DATA3, DATA4, DATA5, DATA6, DATA7, DATA8];
const APPCONTENT =
  'Build on your workflow with apps that integrate with GitHub.';
const ACTIONCONTENT =
  'An entirely new way to automate your development workflow.';

@Component({
  selector: 'app-my-github',
  templateUrl: './my-github.component.html',
  styleUrls: ['./my-github.component.css'],
})
export class MyGithubComponent implements OnInit {
  searchValue: string = '';
  searchWay: string = 'Best Match';
  data = Array.from(DATAARR);
  data2 = Array.from(this.data);
  queryList: string[] = [];
  queryTitle: string = 'Apps and Actions';
  appContent: string = APPCONTENT;
  actionContent: string = ACTIONCONTENT;
  // focusClass: string = 'background-color: rgb(9, 105, 218);color: #fff;';
  types: string[] = ['Apps', 'Actions'];
  totalNum: number = this.data.length;
  categories: string[] = [
    'Api management',
    'Chat',
    'Code quality',
    'Code review',
  ];
  b1: string = '';
  b2: string = '';
  constructor() {}

  ngOnInit(): void {
    console.log(this.data == this.data2);
  }

  search() {
    if (this.searchValue !== '') {
      this.data = [];
      this.data2.forEach((ele) => {
        if (
          ele.title.toLowerCase().indexOf(this.searchValue.toLowerCase()) !== -1
        ) {
          this.data.push(ele);
          this.totalNum = this.data.length;
        } else {
          this.totalNum = this.data.length;
        }
      });
    } else if (this.searchValue === '' && this.queryList.length === 0) {
      this.data = this.data2;
      this.totalNum = this.data.length;
    } else {
      this.totalNum = this.data.length;
    }
  }

  changeSearchWay() {
    if (this.searchWay === 'Best Match') {
      this.search();
    } else if (this.searchWay === 'Recently Added') {
      this.data = this.data.sort((a: any, b: any) => {
        return b.addTime - a.addTime;
      });
    } else {
      this.data = this.data.sort((a: any, b: any) => {
        return b.installed - a.installed;
      });
    }
  }

  removeElement(param: string) {
    const a = this.queryList.indexOf(param);
    this.queryList.splice(a, 1);

    if (!this.queryList.length) {
      this.data = DATAARR;
      this.totalNum = this.data.length;
    } else {
      this.addQueryElement(this.queryList[0]);
    }
  }

  addQueryElement(a: string) {
    this.data = [];
    if (this.types.includes(a)) {
      if (this.queryList.includes('Apps')) {
        if (a === 'Actions') {
          this.queryList.splice(this.queryList.indexOf('Apps'), 1);
          this.queryList.push(a);
          this.queryTitle = a;
        }
      } else if (this.queryList.includes('Actions')) {
        if (a === 'Apps') {
          this.queryList.splice(this.queryList.indexOf('Actions'), 1);
          this.queryList.push(a);
          this.queryTitle = a;
        }
      } else {
        this.queryList.push(a);
        this.queryTitle = a;
        // (document.getElementById(a.toLowerCase()) as any).style =
        //   this.focusClass;
      }
    }

    if (this.categories.includes(a)) {
      if (this.queryList.includes('Api management')) {
        if (a === 'Chat' || a === 'Code quality' || a === 'Code review') {
          this.queryList.splice(this.queryList.indexOf('Api management'), 1);
          this.queryList.push(a);
          // (document.getElementById(a.toLowerCase()) as any).style =
          //   this.focusClass;
        }
      } else if (this.queryList.includes('Chat')) {
        if (
          a === 'Api management' ||
          a === 'Code quality' ||
          a === 'Code review'
        ) {
          this.queryList.splice(this.queryList.indexOf('Chat'), 1);
          this.queryList.push(a);
          // (document.getElementById(a.toLowerCase()) as any).style =
          //   this.focusClass;
        }
      } else if (this.queryList.includes('Code quality')) {
        if (a === 'Api management' || a === 'Chat' || a === 'Code review') {
          this.queryList.splice(this.queryList.indexOf('Code quality'), 1);
          this.queryList.push(a);
          // (document.getElementById(a.toLowerCase()) as any).style =
          //   this.focusClass;
        }
      } else if (this.queryList.includes('Code review')) {
        if (a === 'Api management' || a === 'Chat' || a === 'Code quality') {
          this.queryList.splice(this.queryList.indexOf('Code review'), 1);
          this.queryList.push(a);
          // (document.getElementById(a.toLowerCase()) as any).style =
          //   this.focusClass;
        }
      } else {
        this.queryList.push(a);
        // (document.getElementById(a.toLowerCase()) as any).style =
        //   this.focusClass;
      }
    }

    if (this.queryList.length === 1) {
      this.queryList.forEach((ele) => {
        this.data2.forEach((e) => {
          if (e.type === ele) {
            this.data.push(e);
            this.totalNum = this.data.length;
          }
          if (e.category === ele) {
            this.data.push(e);
            this.totalNum = this.data.length;
          }
        });
      });
    } else {
      for (let i of this.queryList) {
        if (this.types.includes(i)) {
          this.b1 = i;
        } else {
          this.b2 = i;
        }
        this.data2.forEach((e) => {
          if (e.type === this.b1 && e.category === this.b2) {
            this.data = [];
            this.data.push(e);
            this.totalNum = this.data.length;
          }
        });
      }
    }
    this.changeSearchWay();

    // this.queryList.forEach((e) => {
    //   (document.getElementById(e.toLowerCase()) as any).style = this.focusClass;
    // });
  }
}
