# Стили

Scope: project-specific overlay.

В `sellgar.server` нет frontend style layer. CSS/SCSS правила из исходного
проекта сюда не переносятся.

Если в gateway появится HTML/template/static asset, локальные правила нужно
описать рядом с соответствующим workspace и не смешивать с NestJS API
документацией.
