/**
 * Service Saints du Jour
 * Utilise l'API Santoral / données liturgiques
 */

export interface SaintDuJour {
  nom: string;
  titre: string;
  description: string;
  citation?: string;
  fete: string; // "Mémoire", "Solennité", "Fête", etc.
}

/**
 * Base de données simplifiée de saints par jour (mois-jour).
 * On utilise cette approche car les API de saints gratuites sont rares.
 * En production, on pourrait connecter à l'API Nominis ou au calendrier liturgique.
 */
const SAINTS_DATABASE: Record<string, SaintDuJour[]> = {
  '01-01': [{ nom: 'Sainte Marie, Mère de Dieu', titre: 'Mère de Dieu', description: 'Solennité de Marie, la Sainte Mère de Dieu. L\'Église célèbre Marie, celle qui a porté en son sein le Fils de Dieu fait homme.', fete: 'Solennité', citation: '« Mon âme exalte le Seigneur, exulte mon esprit en Dieu, mon Sauveur ! »' }],
  '01-06': [{ nom: 'Épiphanie du Seigneur', titre: 'Manifestation du Seigneur', description: 'Les Mages venus d\'Orient se prosternent devant l\'Enfant-Jésus et lui offrent l\'or, l\'encens et la myrrhe.', fete: 'Solennité', citation: '« Ils entrèrent dans la maison, virent le petit enfant avec Marie sa mère, et se prosternèrent. »' }],
  '01-17': [{ nom: 'Saint Antoine le Grand', titre: 'Père des moines', description: 'Ermite en Égypte au IIIe siècle, Antoine est considéré comme le fondateur du monachisme chrétien. Il vécut dans le désert pendant plus de 80 ans.', fete: 'Mémoire', citation: '« La vie éternelle, voilà notre unique espérance. »' }],
  '02-02': [{ nom: 'Présentation du Seigneur au Temple', titre: 'Chandeleur', description: 'Jésus est présenté au Temple par Marie et Joseph, quarante jours après sa naissance. Syméon le reconnaît comme la lumière des nations.', fete: 'Fête', citation: '« Mes yeux ont vu ton salut, lumière pour éclairer les nations. »' }],
  '02-11': [{ nom: 'Notre-Dame de Lourdes', titre: 'Apparitions de la Vierge', description: 'En 1858, la Vierge Marie apparaît à Bernadette Soubirous dans la grotte de Massabielle à Lourdes.', fete: 'Mémoire facultative', citation: '« Je suis l\'Immaculée Conception. »' }],
  '03-19': [{ nom: 'Saint Joseph', titre: 'Époux de la Vierge Marie', description: 'Patron de l\'Église universelle, Joseph est le modèle du père attentif, de l\'homme juste qui écoute Dieu dans le silence.', fete: 'Solennité', citation: '« Joseph, homme juste, ne craignis pas de prendre chez toi Marie, ton épouse. »' }],
  '03-25': [{ nom: 'Annonciation du Seigneur', titre: 'L\'ange Gabriel annonce à Marie', description: 'L\'archange Gabriel annonce à Marie qu\'elle concevra et enfantera un fils qu\'elle appellera Jésus.', fete: 'Solennité', citation: '« Je te salue, Comblée-de-grâce, le Seigneur est avec toi. »' }],
  '04-23': [{ nom: 'Saint Georges', titre: 'Martyr', description: 'Soldat romain converti au christianisme, Georges est vénéré comme l\'un des plus célèbres martyrs. La légende du dragon symbolise sa victoire sur le mal.', fete: 'Mémoire facultative' }],
  '05-01': [{ nom: 'Saint Joseph Travailleur', titre: 'Patron des travailleurs', description: 'L\'Église célèbre le travail humain et la dignité du travailleur à travers l\'exemple de Joseph, charpentier de Nazareth.', fete: 'Mémoire facultative' }],
  '05-13': [{ nom: 'Notre-Dame de Fatima', titre: 'Apparitions de la Vierge', description: 'En 1917, la Vierge Marie apparaît à trois bergers à Fatima, au Portugal, et leur confie un message de prière et de conversion.', fete: 'Mémoire facultative', citation: '« Priez le chapelet tous les jours pour obtenir la paix dans le monde. »' }],
  '06-13': [{ nom: 'Saint Antoine de Padoue', titre: 'Docteur de l\'Église', description: 'Franciscain portugais, grand prédicateur et thaumaturge, Antoine est invoqué pour retrouver les objets perdus.', fete: 'Mémoire', citation: '« La parole de Dieu est lumière pour l\'intelligence et feu pour la volonté. »' }],
  '06-24': [{ nom: 'Nativité de Saint Jean-Baptiste', titre: 'Précurseur du Christ', description: 'Jean-Baptiste est le prophète qui a préparé la venue du Messie et qui a baptisé Jésus dans les eaux du Jourdain.', fete: 'Solennité', citation: '« Il faut que lui grandisse et que moi je diminue. »' }],
  '06-29': [{ nom: 'Saints Pierre et Paul', titre: 'Apôtres', description: 'Pierre, le roc sur lequel l\'Église est bâtie, et Paul, l\'apôtre des nations, sont célébrés ensemble comme les piliers de l\'Église.', fete: 'Solennité' }],
  '07-16': [{ nom: 'Notre-Dame du Mont-Carmel', titre: 'Patronne des Carmes', description: 'Fête mariale liée à l\'ordre du Carmel et au scapulaire, signe de la protection maternelle de Marie.', fete: 'Mémoire facultative' }],
  '07-22': [{ nom: 'Sainte Marie Madeleine', titre: 'Apôtre des Apôtres', description: 'Disciple fidèle de Jésus, Marie Madeleine est la première à voir le Christ ressuscité au matin de Pâques.', fete: 'Fête', citation: '« J\'ai vu le Seigneur, et voilà ce qu\'il m\'a dit. »' }],
  '08-04': [{ nom: 'Saint Jean-Marie Vianney', titre: 'Curé d\'Ars', description: 'Patron de tous les curés du monde, Saint Jean-Marie Vianney s\'est distingué par sa vie de prière, son austérité et son dévouement inébranlable au sacrement de la réconciliation.', fete: 'Mémoire', citation: '« L\'oraison n\'est autre chose qu\'une union avec Dieu. »' }],
  '08-15': [{ nom: 'Assomption de la Vierge Marie', titre: 'Marie élevée au Ciel', description: 'L\'Église célèbre l\'entrée de Marie, corps et âme, dans la gloire du Ciel, au terme de sa vie terrestre.', fete: 'Solennité', citation: '« Le Puissant fit pour moi des merveilles ; Saint est son nom ! »' }],
  '08-22': [{ nom: 'Vierge Marie Reine', titre: 'Reine du Ciel et de la Terre', description: 'Marie est célébrée comme Reine, couronnée de gloire auprès de son Fils dans le Ciel.', fete: 'Mémoire' }],
  '09-08': [{ nom: 'Nativité de la Vierge Marie', titre: 'Naissance de Marie', description: 'L\'Église célèbre la naissance de celle qui allait devenir la Mère du Sauveur, Anne et Joachim étant ses parents.', fete: 'Fête' }],
  '09-29': [{ nom: 'Saints Michel, Gabriel et Raphaël', titre: 'Archanges', description: 'Fête des trois archanges : Michel, le défenseur ; Gabriel, le messager ; Raphaël, le guérisseur.', fete: 'Fête' }],
  '10-01': [{ nom: 'Sainte Thérèse de l\'Enfant-Jésus', titre: 'Docteur de l\'Église', description: 'Carmélite de Lisieux, Thérèse a proposé la « petite voie » de l\'enfance spirituelle, devenant l\'une des saintes les plus populaires.', fete: 'Mémoire', citation: '« Ma vocation, c\'est l\'amour ! »' }],
  '10-04': [{ nom: 'Saint François d\'Assise', titre: 'Fondateur des Franciscains', description: 'François a tout quitté pour vivre dans la pauvreté radicale et la joie, devenant le chantre de la Création.', fete: 'Mémoire', citation: '« Seigneur, fais de moi un instrument de ta paix. »' }],
  '10-07': [{ nom: 'Notre-Dame du Rosaire', titre: 'Fête du Rosaire', description: 'Fête instituée pour commémorer la victoire de Lépante (1571), attribuée à la prière du Rosaire.', fete: 'Mémoire' }],
  '11-01': [{ nom: 'Tous les Saints', titre: 'Toussaint', description: 'L\'Église honore tous les saints, connus et inconnus, qui jouissent de la béatitude éternelle.', fete: 'Solennité' }],
  '11-02': [{ nom: 'Commémoration des fidèles défunts', titre: 'Jour des Morts', description: 'L\'Église prie pour tous les fidèles défunts, demandant la miséricorde de Dieu pour les âmes du purgatoire.', fete: 'Commémoration' }],
  '12-08': [{ nom: 'Immaculée Conception de la Vierge Marie', titre: 'Conçue sans péché', description: 'L\'Église célèbre Marie conçue sans péché originel, pleine de grâce dès le premier instant de son existence.', fete: 'Solennité', citation: '« Je te salue, pleine de grâce. »' }],
  '12-25': [{ nom: 'Nativité du Seigneur', titre: 'Noël', description: 'L\'Église célèbre la naissance de Jésus-Christ, le Fils de Dieu fait homme, à Bethléem.', fete: 'Solennité', citation: '« Gloire à Dieu au plus haut des cieux, et paix sur la terre aux hommes qu\'Il aime. »' }],
};

// Saints de secours si le jour n'est pas dans la base
const DEFAULT_SAINTS: SaintDuJour[] = [
  {
    nom: 'Saints et Bienheureux du jour',
    titre: 'Temps ordinaire',
    description: 'L\'Église honore aujourd\'hui les saints et bienheureux de ce jour. Chaque jour est l\'occasion de se souvenir de ceux qui nous ont précédés dans la foi et de les invoquer dans la prière.',
    fete: 'Mémoire',
    citation: '« Soyez saints, car moi, le Seigneur votre Dieu, je suis saint. »',
  },
];

/**
 * Récupère les saints du jour.
 */
export const fetchSaintsDuJour = async (): Promise<SaintDuJour[]> => {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const key = `${month}-${day}`;

  return SAINTS_DATABASE[key] || DEFAULT_SAINTS;
};
