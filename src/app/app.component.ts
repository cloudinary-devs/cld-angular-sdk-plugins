import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Import the CloudinaryModule.
import {CloudinaryModule} from '@cloudinary/ng';

import { CloudinaryImage } from "@cloudinary/url-gen";
import {
  lazyload,
  responsive,
  accessibility,
  placeholder
} from "@cloudinary/ng";

/**
 * This sample Angular project showcases how to use
 * @cloudinary/url-gen along with our Angular SDK to render CloudinaryImage.
 *
 * In addition, we showcase how to use our advanced features
 * in the form of plugins. For more information on the SDK and
 * plugins, see https://cloudinary.com/documentation/angular_image_transformations#plugins.
 *
 * Note: The following order or plugins should be used: 
 plugins=[lazyload(),responsive(), accessibility(), placeholder()] 
 */

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CloudinaryModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cld-angular-sdk-plugins';
  cloudinaryImage = new CloudinaryImage("sample", { cloudName: "demo" });
  brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
  woman = new CloudinaryImage("woman", { cloudName: "demo" });
  cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
  largeImage = new CloudinaryImage("oil", { cloudName: "demo" });

  accessibility = [accessibility()];
  colorBlind = [accessibility({ mode: "colorblind" })];
  responsive = [responsive({ steps: 100 })];
  lazyload = [lazyload()];
  lazyloadWithPlaceholder = [lazyload(), placeholder()];
}
