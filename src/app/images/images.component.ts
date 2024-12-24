import { Component } from '@angular/core';
import { ImagesService } from './images.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-images',
  standalone: true,
  imports: [MatCardModule,CurrencyPipe, DatePipe, CommonModule],
  templateUrl: './images.component.html',
  styleUrl: './images.component.css'
})
export class ImagesComponent {

  constructor(
    private _imageService: ImagesService
  ) { }

  cars: any[]
  imageUrls: { [key: string]: string } = {};

  ngOnInit(){
    this._imageService.getPosts().subscribe((data: any) => {
      this.cars = data;
      this.loadImages();
    });
  }


  loadImages(): void {
    this.cars.forEach(car => {
      car.images.forEach(image => {
        this.getImageUrl(car.user.id, car.id, image.scannedFileId);
      });
    });
  }

  getImageUrl(userId: string, postId: string, fileId: string): void {
    const imageKey = `${userId}_${postId}_${fileId}`;

    if (!this.imageUrls[imageKey]) {
      this._imageService.getImage(userId, postId, fileId).subscribe(
        (blob: Blob) => {
          const url = URL.createObjectURL(blob);
          this.imageUrls[imageKey] = url;
        },
        (error) => {
          console.error('Erro ao carregar a imagem:', error);
        }
      );
    }
  }

  loadImage(): void {
    this.cars.forEach(car => {
      if (car.images.length > 0) {
        this.getImageUrl(car.user.id, car.id, car.images[0].scannedFileId);
      }
    });
  }

  getOneImageUrl(userId: string, postId: string, fileId: string): void {
    const imageKey = `${userId}_${postId}_${fileId}`;

    if (!this.imageUrls[imageKey]) {
      this._imageService.getImage(userId, postId, fileId).subscribe(
        (blob: Blob) => {
          const url = URL.createObjectURL(blob);
          this.imageUrls[imageKey] = url;
        },
        (error) => {
          console.error('Erro ao carregar a imagem:', error);
        }
      );
    }
  }
}
