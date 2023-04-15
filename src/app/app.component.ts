import { Component } from '@angular/core';
import { Ifiles, Itemplo, cPlayers, emplo } from './shared/models/data';
import { cricketPlayers, employees, users } from './shared/const/players';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title1: string = `ipsum dolor sit amet consectetur adipisicing eli?`;
  title: string = `rem ipsum dolor sit amet consectetur adipisicing elit. Odio eos possimus perferendis vitae eveniet ullam similique velit dignissimos quae et atque temporibus ad, ipsa amet, impedit quod eaque. Atque soluta ipsum necessitatibus id quasi, accusantium, nihil officiis veniam at corrupti recusandae sed fugit, laudantium nulla fugiat. Expedita quis, aliquam assumenda eligendi pariatur, minus quam veritatis id atque blanditiis impedit nam aliquid debitis optio perferendis. Officia omnis porro perferendis dolorem. Deleniti eaque nisi consequuntur facilis! Ut tenetur architecto eius explicabo ullam doloribus blanditiis itaque magnam. Illo totam atque id ullam dignissimos veniam sapiente eaque, ex labore minima blanditiis tenetur, quod, error optio quam quos dolore doloremque facilis repellendus sed delectus cupiditate provident deserunt? Delectus molestias, reprehenderit doloribus aspernatur iure accusamus nobis illo, eum quo labore natus illum cum rerum voluptatibus odit nisi repudiandae nam, nesciunt tempore aliquam. Vel illum id nihil similique consequuntur! Et consectetur ipsam alias aliquid nobis nihil! Maxime dolorem quisquam libero blanditiis hic laboriosam accusantium, consequatur accusamus. Cum, iusto deserunt voluptates vel praesentium doloribus dolorem doloremque illum. Numquam tempore natus, at accusamus fugiat minima quis, molestiae iusto accusantium error voluptatibus. Ad ab alias voluptatum blanditiis voluptas. Aperiam deleniti cumque blanditiis reprehenderit delectus quaerat expedita soluta est facere ut? Labore reiciendis reprehenderit in quidem corporis ipsa praesentium voluptates sint! Praesentium commodi nulla non unde architecto maiores debitis, explicabo ipsam quia aliquid? Dolor eveniet minus in provident impedit suscipit, quos velit dolores repellendus assumenda? Nesciunt ullam facilis ut, voluptatum sit praesentium quia nisi nihil voluptas corrupti consectetur. Est, sequi accusamus?`;
  d: Date = new Date(2023, 4, 7);
  course = {
    CourseName: 'mEAN STACK',
    noOfStudent: 123,
    rating: 386.3888888888888888,
    releaseddate: new Date(2022, 2, 26),
    price: 199.99,
  };
  filesarray: Array<Ifiles> = [
    {
      name: 'form 16',
      size: 12336,
      type: 'pdf',
    },
    {
      name: 'salary slip',
      size: 13245,
      type: 'pdf',
    },
    {
      name: 'TDC',
      size: 45363,
      type: 'pdf',
    },
  ];
  length!: number;
  SearchByValue!: string;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.SearchByValue);
    console.log(this.playersArray);
  }
  k!: number;
  playersArray: Array<cPlayers> = cricketPlayers;
  employee: Array<emplo> = users;
  newEmployee: Array<Itemplo> = employees;

  framework1: string = 'Angular';
  framework: string = 'Angular';
    onframeWorkChange1(val: string) {
    console.log(val);
    this.framework1 = val;
  }
  onframeWorkChange(eve: Event) {
    let val = (eve.target as HTMLElement).innerText;
    console.log(val);
    this.framework = val;
  }
}
