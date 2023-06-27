// Variáveis contendo os pacotes e plugins utilizados na automação das tarefas
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');

// Função para comprimir imagens
function comprimeImagens() {    
    return gulp.src('./src/images/*')
        .pipe(imagemin()) // Comprime as imagens
        .pipe(gulp.dest('./build/images')); // Salva as imagens comprimidas na pasta de destino
}

// Função para comprimir JavaScript
function comprimeJs() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify()) // Comprime o código JavaScript
        .pipe(obfuscate()) // Ofusca o código JavaScript
        .pipe(gulp.dest('./build/scripts')); // Salva o código comprimido e ofuscado na pasta de destino
}

// Função para compilar Sass
function compilaSass() {
    return gulp.src('./src/styles/main.scss')
        .pipe(sourcemaps.init()) // Inicia a geração dos sourcemaps
        .pipe(sass({
            outputStyle: 'compressed' // Define o estilo de saída como comprimido
        }))
        .pipe(sourcemaps.write('./maps')) // Escreve os sourcemaps
        .pipe(gulp.dest('./build/styles')); // Salva o CSS compilado na pasta de destino
}

// Tarefa padrão do Gulp
exports.default = function() {
    // Observa alterações nos arquivos .scss e executa a função compilaSass
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false }, gulp.series(compilaSass));
    
    // Observa alterações nos arquivos .js e executa a função comprimeJs
    gulp.watch('./src/scripts/*.js', {ignoreInitial: false }, gulp.series(comprimeJs));
    
    // Observa alterações nos arquivos de imagens e executa a função comprimeImagens
    gulp.watch('./src/images/*', {ignoreInitial: false }, gulp.series(comprimeImagens));
}