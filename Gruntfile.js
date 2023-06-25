module.exports = function (grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Tarefa de compilação do LESS
        less: {
            development: {
                options: {
                    compress: true, // Define se o CSS compilado será comprimido
                },
                files: {
                    'dist/styles/main.css': 'src/styles/main.less',
                },
            },
        },

        // Tarefa de compressão do JavaScript
        uglify: {
            options: {
                compress: true, // Define se o código JavaScript será comprimido
                mangle: true, // Define se os nomes das variáveis e funções serão modificados
            },
            my_target: {
                files: {
                    'dist/scripts/main.min.js': ['src/scripts/*.js'],
                },
            },
        },
    });

    // Carrega as tarefas do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registra as tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
};