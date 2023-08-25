По материалам:

https://www.youtube.com/watch?v=faEdFGkmr5s

Здесь модульное решение с применением WizardScene и i18n

Еще раз про GIThub
Создаем репазитарий. Если сразу инициализировать файл READMD не получится 
push проекта. Можно только clone созданного репазитария:
В любой папке делаю git clone https://github.com/mevnik/telegraf_bot.git (например)
Но стоит указать папку, в которую будет клонироваться, например, telegraf_bot.
Иначе создастся папка внутри которой будет папка с проектом
Чтобы пушить свой проект не инициализируем файл READMD и тогда действуем по схеме
 git init
git add . если все файлы,  или git add "name file", если конкретный файл
   или, git add -A, если все модифицированные и добавленные файлы
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mevnik/telegraf_bot.git (например)
git push -u origin main

*/Прим. commit -ad ... обьеденяет add и commit
    Создание ветки git branch <name new branch>
    Посмотреть ветки git branch
    
    When you work in new branch (git switch <new branch> and  first push the new branch on git hub:
    $ git push origin <branch name>
На любом этапе можно посмотреть git status
При выполнении merge может понадобиться редактировать в редакторе v1. См.:
https://docs.altlinux.org/ru-RU/archive/2.3/html-single/junior/alt-docs-extras-linuxnovice/ch02s10.html

И еще:
    https://www.youtube.com/playlist?list=PLoonZ8wII66iUm84o7nadL-oqINzBLk5g
git config --list
git checkout —<file name> откат незакоммитенных изменений
git log --pretty=format:"%h - %an, %ar : %s" посмотреть все commit в удобном виде
git log --since=2.weeks то же за 2 недели
git checkout -b <name new branch> создание новой ветки с одновременным переключением на нее
 	а с флагом -v покажет отличия в ветках
Разрешение конфликтов:
https://docs.github.com/ru/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line
Другие репозитории, например bitbucket
git remote чтобы посмотреть какие репозитории подключены


Вместо пароля требуется ключ
Получаем так:
авотар->Settings->Developer settings->Personal access tokens->Tokens(или Fine-grained tokens)->Generate new token

Удаление репозитория:
в строке опций Settings-> внизу страницы Danger Zone -> Delete this repository
Получение изменений сделанных кем-то в репозитарии (например, с другого компа):
   git pull
Можно посмотреть все команды git просто командой git.
Если тупиковая ситуация в терминале (что-то сделали не так), нажимаем esc и вводим :wq
_________________________________
