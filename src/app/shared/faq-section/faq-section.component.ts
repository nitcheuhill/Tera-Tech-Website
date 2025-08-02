import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq-section',
  imports: [FormsModule, CommonModule],
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss',
})
export class FaqSectionComponent {
  searchTerm: string = '';

  faqs: FAQ[] = [
    {
      id: 1,
      question: 'Quels types de services propose Tera Tech Solutions Sarl ?',
      answer:
        'Nous offrons une large gamme de prestations dans les domaines suivants : Services informatiques (vente et maintenance de matériel) ,Location d’engins de chantier et terrassementInstallation de systèmes de vidéo surveillance,Services logistiques et transport de marchandises ',
      isOpen: true,
    },
    {
      id: 2,
      question: 'Est-ce que vous proposez des devis personnalisés ?',
      answer:
        'Oui, chaque prestation est unique. Contactez-nous pour recevoir un devis gratuit et adapté à vos besoins spécifiques.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'Quels types de matériel informatique vendez-vous ?',
      answer:
        'Nous proposons des ordinateurs portables, PC de bureau, imprimantes, onduleurs, périphériques, accessoires réseau, ainsi que des composants spécifiques sur commande.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Puis-je louer des engins pour une courte durée ?',
      answer:
        'Oui, nous proposons la location à courte ou longue durée selon votre chantier ou projet. Nous disposons d’un parc d’engins adaptés à différents types de travaux de terrassement.',
      isOpen: false,
    },
    {
      id: 5,
      question: ' Installez-vous les caméras de surveillance ?',
      answer:
        'Absolument. Nous assurons l’installation, la configuration et la maintenance de vos systèmes de vidéo surveillance, avec ou sans enregistrement à distance.',
      isOpen: false,
    },
    {
      id: 6,
      question: ' Proposez-vous le transport de marchandises interurbain ?',
      answer:
        'Oui. Notre service de logistique et transport couvre plusieurs régions avec des solutions sécurisées et adaptées à tous les types de marchandises.',
      isOpen: false,
    },
    {
      id: 7,
      question: 'Assurez-vous un service après-vente ?',
      answer:
        'Oui, pour tout matériel acheté ou tout service réalisé par nos soins, nous garantissons un SAV réactif et fiable.',
      isOpen: false,
    },
    {
      id: 8,
      question: ' Comment puis-je passer commande ou demander un service ?',
      answer:
        'Vous pouvez nous contacter via notre formulaire en ligne, par téléphone ou en nous rendant visite directement à notre siège. Nous nous ferons un plaisir de vous accompagner.',
      isOpen: false,
    },
    {
      id: 9,
      question: 'Dans quelles régions intervenez-vous ?',
      answer:
        'Nous intervenons principalement au Cameroun, mais selon le service, nous pouvons également nous déplacer dans les pays voisins.',
      isOpen: false,
    },
    {
      id: 10,
      question: 'Quels sont vos délais de livraison ou d’intervention ?',
      answer:
        'Les délais varient selon le service. Pour les produits informatiques, la livraison se fait sous 24 à 72h. Pour les prestations (location, vidéo surveillance, etc.), une date est convenue en fonction du planning et des besoins du client.',
      isOpen: false,
    },
  ];

  get filteredFaqs(): FAQ[] {
    if (!this.searchTerm.trim()) {
      return this.faqs;
    }

    return this.faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  toggleFaq(faqId: number): void {
    const faq = this.faqs.find((f) => f.id === faqId);
    if (faq) {
      faq.isOpen = !faq.isOpen;
    }
  }

  onSearchChange(): void {
    // Fermer tous les FAQs quand on commence une nouvelle recherche
    this.faqs.forEach((faq) => (faq.isOpen = false));
  }

  trackByFaqId(index: number, faq: FAQ): number {
    return faq.id;
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.onSearchChange();
  }
}
