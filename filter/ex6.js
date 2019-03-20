/* Array.prototype.filter - Exercice 6

Ecrire une fonction filterOffensiveComments, qui attend deux paramètres, tous deux
des tableaux de chaînes de caractères :
1. des commentaires sur un fil d'actualité ou une vidéo.
2. une liste de mots "grossiers" ou "offensifs" à bannir

La fonction doit éliminer les commentaires contenant au moins un des mots "bannis".

Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
[
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY"
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]
2. mots à bannir: ['bloody', 'damn']

Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/

// var array = [1, 2, 3, 4, 5];

// var even = function(element) {
//   element.
//   return element % 2 === 0;
// };


// function isInArray(value, array) {
//   return array.indexOf(value) > -1;
// }


// console.log(array.some(even));
// expected output: true


function filterOffensiveComments(comments, bannedWords) {

  let arr = [];

  let clear = comments.filter(function(comment) {

    let newComment = comment.toLowerCase();

    let present = bannedWords.filter(function(word) {
      if (newComment.includes(word)) {
        arr.push(newComment);
        return true;
      } else {
        return false;
      }
    }) 
    
    if (arr.includes(newComment)) {
      return false;
    } else {
      return true;
    }
  })
 
  return clear;

}

// Ne pas modifier l'export
module.exports = filterOffensiveComments;
