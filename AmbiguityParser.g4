parser grammar AmbiguityParser;

options { language=JavaScript; }

document : expr EOF;

expr : INT
    | expr MULTOP expr
    | expr ADDOP expr;