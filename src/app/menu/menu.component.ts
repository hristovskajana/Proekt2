import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule, CommonModule],  
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  comments: string[] = [];
  newComment: string = ''; 

  submitComment(): void {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment); 
      this.newComment = ''; 
    }
  }

  cars = [
    {
      name: 'Volkswagen T2c Kombi',
      price: '€ 22,000',
      image: '../../assets/images/kombe.jpg',
    },
    {
      name: 'MERCEDES CLA180d',
      price: '€ 28,500',
      image: '../../assets/images/car12.jpg',
    },
    {
      name: 'Range Rover EVOQUE',
      price: '€ 18,999',
      image: '../../assets/images/car11.jpg',
    },
    {
      name: 'PEUGEOT 3008',
      price: '€ 19,800',
      image: '../../assets/images/car14.jpg',
    },
  ];

  selectedCar: any = null;
  selectedDate: string = '';

  selectCarForTestDrive(car: any): void {
    this.selectedCar = car;
    this.selectedDate = ''; 
  }

  confirmReservation(): void {
    if (!this.selectedDate) {
      alert('Please select a date for the test drive.');
      return;
    }
    alert(
      `You have reserved a Test Drive for ${this.selectedCar.name} on ${this.selectedDate}.`
    );
    this.closeModal();
  }

  closeModal(): void {
    this.selectedCar = null;
    this.selectedDate = '';
  }

  onTestDrive(model: string): void {
    alert(`You have selected a Test Drive for: ${model}`);
  }
}
