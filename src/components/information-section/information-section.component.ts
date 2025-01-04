import { Component } from '@angular/core';
import { CustomToggleComponent } from '../custom-toggle/custom-toggle.component';

@Component({
  selector: 'app-information-section',
  standalone: true,
  imports: [CustomToggleComponent],
  templateUrl: './information-section.component.html',
  styleUrl: './information-section.component.scss'
})
export class InformationSectionComponent {
  onTabChange(tab: string) {
    if (tab in this.tabsContent) {
      this.activeTab = tab as 'Ogólnie' | 'Znamiona melanocytowe' | 'Czerniak złośliwy' | 'Rak podstawnokomórkowy';
    } else {
      console.error(`Nieznana zakładka: ${tab}`);
    }
  }
  activeTab: 'Ogólnie' | 'Znamiona melanocytowe' | 'Czerniak złośliwy' | 'Rak podstawnokomórkowy' = 'Ogólnie';

  tabsContent = {
    'Ogólnie': {
      image: 'assets/czerniak.png',
      htmlContent: `
        <h3>Nowotwory skóry – co warto wiedzieć?</h3>
        <br>
        <p>
          <strong>Nowotwory skóry</strong> należą do najczęściej diagnozowanych nowotworów na świecie. 
          <em>Wczesne wykrycie zmian skórnych</em> znacząco zwiększa szanse na skuteczne leczenie, dlatego tak ważne jest 
          <span style="color: #f00;">regularne badanie skóry</span> oraz świadomość objawów, które mogą wskazywać na rozwój nowotworu.
        </p>
        <h3>Jak nasza aplikacja może pomóc?</h3>
        <ul>
          <li>Możesz przeprowadzić wstępną analizę swoich zmian za pomocą zdjęcia.</li>
          <li>Otrzymasz informacje o potencjalnej diagnozie oraz zalecenia dotyczące dalszych działań.</li>
          <li>Dowiesz się więcej o nowotworach skóry i sposobach ich profilaktyki.</li>
        </ul>
      `
    },
    'Znamiona melanocytowe': {
      image: 'assets/znamiona.jpg',
      htmlContent: `
        <h3>Znamiona melanocytowe – co warto wiedzieć?</h3>
        <br>
        <p>
          Znamiona melanocytowe to łagodne zmiany skórne, które powstają w wyniku nagromadzenia melanocytów. 
          Mogą mieć różny kształt, kolor i wielkość. Chociaż są zazwyczaj nieszkodliwe, w niektórych przypadkach 
          mogą przekształcać się w czerniaka.
        </p>
        <h3>Jak dbać o znamiona melanocytowe?</h3>
        <ul>
          <li>Regularnie kontroluj swoje znamiona u dermatologa.</li>
          <li>Unikaj nadmiernego narażenia skóry na promieniowanie UV.</li>
          <li>Obserwuj zmiany w kształcie, wielkości lub kolorze znamion i zgłoś je specjaliście.</li>
        </ul>
      `
    },
    'Czerniak złośliwy': {
      image: 'assets/czerniak.png',
      htmlContent: `
        <h3>Czerniak złośliwy – co warto wiedzieć?</h3>
        <br>
        <p>
          Czerniak złośliwy jest jednym z najbardziej agresywnych nowotworów skóry. 
          Najczęściej rozwija się na bazie istniejących znamion, ale może też pojawiać się jako nowe zmiany. 
          Kluczowe jest wczesne wykrycie, ponieważ późne stadia są trudniejsze do leczenia.
        </p>
        <h3>Jak przeciwdziałać czerniakowi?</h3>
        <ul>
          <li>Regularnie badaj znamiona i zgłaszaj niepokojące zmiany lekarzowi.</li>
          <li>Stosuj kremy z wysokim filtrem UV, zwłaszcza podczas przebywania na słońcu.</li>
          <li>Unikaj korzystania z solarium.</li>
        </ul>
      `
    },
    'Rak podstawnokomórkowy': {
      image: 'assets/rak.jpg',
      htmlContent: `
        <h3>Rak podstawnokomórkowy – co warto wiedzieć?</h3>
        <br>
        <p>
          Rak podstawnokomórkowy to najczęściej występujący typ raka skóry, charakteryzujący się powolnym wzrostem. 
          Zmiany skórne mają często postać małych, perłowych guzków lub ranek, które trudno się goją.
        </p>
        <h3>Jak zapobiegać i leczyć?</h3>
        <ul>
          <li>Zgłaszaj wszystkie trudnogojące się zmiany skórne dermatologowi.</li>
          <li>Unikaj nadmiernej ekspozycji na słońce i stosuj ochronę UV.</li>
          <li>Monitoruj swoją skórę pod kątem nowych zmian lub nieprawidłowości.</li>
        </ul>
      `
    }
  };
}
