import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

export default function main() {
  return bootstrapApplication(AppComponent, config).catch((err) =>
    console.error(err)
  );
}
