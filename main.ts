import {
  // Web languages
  html, css, js, ts, jsx, tsx,
  
  // Data formats
  json, xml, yaml, toml, ini, csv,
  
  // Markup languages
  md, tex, rst,
  
  // Query languages
  sql, graphql,
  
  // Shell scripting
  sh, ps1, bat,
  
  // Programming languages
  py, rb, go, rs, c, cpp, cs, java, php, swift, kt,
  scala, dart, lua, pl, r, elm, fs, clj, hs,
  
  // Configuration files
  dockerfile, makefile,
  
  // Other
  svg, diff, proto, sol,
  
  // Language utilities
  ext, getSupportedExtensions
} from "./src/mod.ts";

/**
 * Demonstrates the usage of the ts-tmpl-engine library
 */
function demonstrateTemplates() {
  const title = "TypeScript Template Engine";
  const content = "Use TypeScript as a template engine through template literals!";
  const userId = 123;
  const email = "user@example.com";
  const appName = "TS Template";
  const version = "1.0.0";
  const username = "johndoe";
  const password = "password123";
  const repoUrl = "https://github.com/90dy/ts-tmpl-engine";
  const apiEndpoint = "https://api.example.com";
  const port = 3000;

  console.log("Supported extensions:", getSupportedExtensions().join(", "));
  
  // ==================== WEB LANGUAGES ====================
  
  // HTML template
  const htmlTemplate = html`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <style>${css`
          body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
        `}</style>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${content}</p>
        <script>${js`
          document.addEventListener('DOMContentLoaded', () => {
            console.log('Page loaded!');
          });
        `}</script>
      </body>
    </html>
  `;
  
  // TypeScript template
  const tsTemplate = ts`
    interface User {
      id: number;
      email: string;
    }
    
    function getUser(id: number): User {
      return {
        id: ${userId},
        email: "${email}"
      };
    }
    
    const user = getUser(${userId});
    console.log(user);
  `;
  
  // JSX template
  const jsxTemplate = jsx`
    import React from 'react';
    
    function Welcome() {
      return (
        <div>
          <h1>Hello, ${username}!</h1>
          <p>${content}</p>
        </div>
      );
    }
    
    export default Welcome;
  `;
  
  // TSX template
  const tsxTemplate = tsx`
    import React from "react";
    
    interface AppProps {
      title: string;
      content: string;
    }
    
    const App: React.FC<AppProps> = ({ title, content }) => {
      return (
        <div>
          <h1>${title}</h1>
          <p>${content}</p>
        </div>
      );
    };
    
    export default App;
  `;
  
  // ==================== DATA FORMATS ====================
  
  // JSON template
  const jsonTemplate = json`
    {
      "name": "John Doe",
      "age": 30,
      "email": "${email}",
      "app": "${appName}",
      "version": "${version}"
    }
  `;
  
  // XML template
  const xmlTemplate = xml`
    <?xml version="1.0" encoding="UTF-8"?>
    <user>
      <id>${userId}</id>
      <email>${email}</email>
      <app>${appName}</app>
      <version>${version}</version>
    </user>
  `;
  
  // YAML template
  const yamlTemplate = yaml`
    app: ${appName}
    version: ${version}
    user:
      id: ${userId}
      email: ${email}
    settings:
      theme: dark
      language: en
  `;
  
  // TOML template
  const tomlTemplate = toml`
    app = "${appName}"
    version = "${version}"
    
    [user]
    id = ${userId}
    email = "${email}"
    
    [settings]
    theme = "dark"
    language = "en"
  `;
  
  // INI template
  const iniTemplate = ini`
    [app]
    name = ${appName}
    version = ${version}
    
    [user]
    id = ${userId}
    email = ${email}
    
    [settings]
    theme = dark
    language = en
  `;
  
  // CSV template
  const csvTemplate = csv`
    id,name,email,app
    ${userId},John Doe,${email},${appName}
    456,Jane Smith,jane@example.com,${appName}
  `;
  
  // ==================== MARKUP LANGUAGES ====================
  
  // Markdown template
  const mdTemplate = md`
    # ${title}
    
    ${content}
    
    ## Features
    
    - Type-safe templates
    - Syntax highlighting
    - Easy to use
    
    ## Installation
    
    \`\`\`bash
    npm install ${appName.toLowerCase()}
    \`\`\`
    
    ## Contact
    
    Email: ${email}
  `;
  
  // LaTeX template
  const texTemplate = tex`
    \\documentclass{article}
    \\title{${title}}
    \\author{John Doe}
    \\date{\\today}
    
    \\begin{document}
    
    \\maketitle
    
    \\section{Introduction}
    ${content}
    
    \\section{Contact}
    Email: ${email}
    
    \\end{document}
  `;
  
  // reStructuredText template
  const rstTemplate = rst`
    ${title}
    ${'='.repeat(title.length)}
    
    ${content}
    
    Features
    --------
    
    * Type-safe templates
    * Syntax highlighting
    * Easy to use
    
    Installation
    -----------
    
    .. code-block:: bash
    
        npm install ${appName.toLowerCase()}
    
    Contact
    -------
    
    Email: ${email}
  `;
  
  // ==================== QUERY LANGUAGES ====================
  
  // SQL template
  const sqlTemplate = sql`
    SELECT * FROM users 
    WHERE id = ${userId} 
    AND email = '${email}'
    AND app = '${appName}';
  `;
  
  // GraphQL template
  const graphqlTemplate = graphql`
    query GetUser {
      user(id: ${userId}) {
        id
        name
        email
        app {
          name
          version
        }
      }
    }
    
    mutation UpdateUser {
      updateUser(id: ${userId}, email: "${email}") {
        id
        email
        updatedAt
      }
    }
  `;
  
  // ==================== SHELL SCRIPTING ====================
  
  // Shell script template
  const shTemplate = sh`
    #!/bin/bash
    
    # ${title}
    # ${content}
    
    APP_NAME="${appName}"
    VERSION="${version}"
    USER_ID=${userId}
    EMAIL="${email}"
    
    echo "Starting $APP_NAME v$VERSION"
    echo "User: $USER_ID ($EMAIL)"
    
    if [ -d "./dist" ]; then
      echo "Cleaning dist directory..."
      rm -rf ./dist
    fi
    
    echo "Building project..."
    mkdir -p ./dist
    echo "Build complete!"
  `;
  
  // PowerShell template
  const ps1Template = ps1`
    # ${title}
    # ${content}
    
    $AppName = "${appName}"
    $Version = "${version}"
    $UserId = ${userId}
    $Email = "${email}"
    
    Write-Host "Starting $AppName v$Version"
    Write-Host "User: $UserId ($Email)"
    
    if (Test-Path -Path "./dist") {
      Write-Host "Cleaning dist directory..."
      Remove-Item -Path "./dist" -Recurse -Force
    }
    
    Write-Host "Building project..."
    New-Item -Path "./dist" -ItemType Directory -Force
    Write-Host "Build complete!"
  `;
  
  // Batch script template
  const batTemplate = bat`
    @echo off
    REM ${title}
    REM ${content}
    
    set APP_NAME=${appName}
    set VERSION=${version}
    set USER_ID=${userId}
    set EMAIL=${email}
    
    echo Starting %APP_NAME% v%VERSION%
    echo User: %USER_ID% (%EMAIL%)
    
    if exist "./dist" (
      echo Cleaning dist directory...
      rmdir /s /q "./dist"
    )
    
    echo Building project...
    mkdir "./dist"
    echo Build complete!
  `;
  
  // ==================== PROGRAMMING LANGUAGES ====================
  
  // Python template
  const pyTemplate = py`
    # ${title}
    # ${content}
    
    class User:
        def __init__(self, user_id, email):
            self.user_id = user_id
            self.email = email
            
        def __str__(self):
            return f"User(id={self.user_id}, email={self.email})"
    
    app_name = "${appName}"
    version = "${version}"
    
    user = User(${userId}, "${email}")
    print(f"Starting {app_name} v{version}")
    print(f"User: {user}")
  `;
  
  // Ruby template
  const rbTemplate = rb`
    # ${title}
    # ${content}
    
    class User
      attr_reader :id, :email
      
      def initialize(id, email)
        @id = id
        @email = email
      end
      
      def to_s
        "User(id=#{@id}, email=#{@email})"
      end
    end
    
    app_name = "${appName}"
    version = "${version}"
    
    user = User.new(${userId}, "${email}")
    puts "Starting #{app_name} v#{version}"
    puts "User: #{user}"
  `;
  
  // Go template
  const goTemplate = go`
    package main
    
    import (
      "fmt"
    )
    
    // ${title}
    // ${content}
    
    type User struct {
      ID    int
      Email string
    }
    
    func (u User) String() string {
      return fmt.Sprintf("User(id=%d, email=%s)", u.ID, u.Email)
    }
    
    func main() {
      appName := "${appName}"
      version := "${version}"
      
      user := User{
        ID:    ${userId},
        Email: "${email}",
      }
      
      fmt.Printf("Starting %s v%s\n", appName, version)
      fmt.Printf("User: %s\n", user)
    }
  `;
  
  // Rust template
  const rsTemplate = rs`
    // ${title}
    // ${content}
    
    struct User {
        id: u32,
        email: String,
    }
    
    impl std::fmt::Display for User {
        fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
            write!(f, "User(id={}, email={})", self.id, self.email)
        }
    }
    
    fn main() {
        let app_name = "${appName}";
        let version = "${version}";
        
        let user = User {
            id: ${userId},
            email: "${email}".to_string(),
        };
        
        println!("Starting {} v{}", app_name, version);
        println!("User: {}", user);
    }
  `;
  
  // C template
  const cTemplate = c`
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    
    // ${title}
    // ${content}
    
    typedef struct {
        int id;
        char email[100];
    } User;
    
    int main() {
        const char* app_name = "${appName}";
        const char* version = "${version}";
        
        User user;
        user.id = ${userId};
        strcpy(user.email, "${email}");
        
        printf("Starting %s v%s\n", app_name, version);
        printf("User: id=%d, email=%s\n", user.id, user.email);
        
        return 0;
    }
  `;
  
  // C++ template
  const cppTemplate = cpp`
    #include <iostream>
    #include <string>
    
    // ${title}
    // ${content}
    
    class User {
    public:
        User(int id, const std::string& email) : id_(id), email_(email) {}
        
        friend std::ostream& operator<<(std::ostream& os, const User& user) {
            return os << "User(id=" << user.id_ << ", email=" << user.email_ << ")";
        }
        
    private:
        int id_;
        std::string email_;
    };
    
    int main() {
        const std::string app_name = "${appName}";
        const std::string version = "${version}";
        
        User user(${userId}, "${email}");
        
        std::cout << "Starting " << app_name << " v" << version << std::endl;
        std::cout << "User: " << user << std::endl;
        
        return 0;
    }
  `;
  
  // C# template
  const csTemplate = cs`
    using System;
    
    // ${title}
    // ${content}
    
    namespace ${appName.replace(/\s+/g, '')}
    {
        public class User
        {
            public int Id { get; set; }
            public string Email { get; set; }
            
            public override string ToString()
            {
                return $"User(id={Id}, email={Email})";
            }
        }
        
        class Program
        {
            static void Main(string[] args)
            {
                string appName = "${appName}";
                string version = "${version}";
                
                var user = new User
                {
                    Id = ${userId},
                    Email = "${email}"
                };
                
                Console.WriteLine($"Starting {appName} v{version}");
                Console.WriteLine($"User: {user}");
            }
        }
    }
  `;
  
  // Java template
  const javaTemplate = java`
    // ${title}
    // ${content}
    
    public class ${appName.replace(/\s+/g, '')} {
        public static class User {
            private final int id;
            private final String email;
            
            public User(int id, String email) {
                this.id = id;
                this.email = email;
            }
            
            @Override
            public String toString() {
                return "User(id=" + id + ", email=" + email + ")";
            }
        }
        
        public static void main(String[] args) {
            String appName = "${appName}";
            String version = "${version}";
            
            User user = new User(${userId}, "${email}");
            
            System.out.println("Starting " + appName + " v" + version);
            System.out.println("User: " + user);
        }
    }
  `;
  
  // PHP template
  const phpTemplate = php`
    <?php
    // ${title}
    // ${content}
    
    class User {
        private $id;
        private $email;
        
        public function __construct($id, $email) {
            $this->id = $id;
            $this->email = $email;
        }
        
        public function __toString() {
            return "User(id={$this->id}, email={$this->email})";
        }
    }
    
    $appName = "${appName}";
    $version = "${version}";
    
    $user = new User(${userId}, "${email}");
    
    echo "Starting {$appName} v{$version}\n";
    echo "User: {$user}\n";
    ?>
  `;
  
  // Swift template
  const swiftTemplate = swift`
    // ${title}
    // ${content}
    
    struct User: CustomStringConvertible {
        let id: Int
        let email: String
        
        var description: String {
            return "User(id=\\(id), email=\\(email))"
        }
    }
    
    let appName = "${appName}"
    let version = "${version}"
    
    let user = User(id: ${userId}, email: "${email}")
    
    print("Starting \\(appName) v\\(version)")
    print("User: \\(user)")
  `;
  
  // Kotlin template
  const ktTemplate = kt`
    // ${title}
    // ${content}
    
    data class User(val id: Int, val email: String)
    
    fun main() {
        val appName = "${appName}"
        val version = "${version}"
        
        val user = User(${userId}, "${email}")
        
        println("Starting $appName v$version")
        println("User: $user")
    }
  `;
  
  // Scala template
  const scalaTemplate = scala`
    // ${title}
    // ${content}
    
    case class User(id: Int, email: String)
    
    object ${appName.replace(/\s+/g, '')} {
      def main(args: Array[String]): Unit = {
        val appName = "${appName}"
        val version = "${version}"
        
        val user = User(${userId}, "${email}")
        
        println(s"Starting $appName v$version")
        println(s"User: $user")
      }
    }
  `;
  
  // Dart template
  const dartTemplate = dart`
    // ${title}
    // ${content}
    
    class User {
      final int id;
      final String email;
      
      User(this.id, this.email);
      
      @override
      String toString() => 'User(id=$id, email=$email)';
    }
    
    void main() {
      final appName = "${appName}";
      final version = "${version}";
      
      final user = User(${userId}, "${email}");
      
      print("Starting $appName v$version");
      print("User: $user");
    }
  `;
  
  // Lua template
  const luaTemplate = lua`
    -- ${title}
    -- ${content}
    
    local User = {}
    User.__index = User
    
    function User.new(id, email)
      local self = setmetatable({}, User)
      self.id = id
      self.email = email
      return self
    end
    
    function User:__tostring()
      return string.format("User(id=%d, email=%s)", self.id, self.email)
    end
    
    local app_name = "${appName}"
    local version = "${version}"
    
    local user = User.new(${userId}, "${email}")
    
    print(string.format("Starting %s v%s", app_name, version))
    print(string.format("User: %s", tostring(user)))
  `;
  
  // Perl template
  const plTemplate = pl`
    #!/usr/bin/perl
    use strict;
    use warnings;
    
    # ${title}
    # ${content}
    
    package User;
    
    sub new {
        my ($class, $id, $email) = @_;
        my $self = {
            id => $id,
            email => $email,
        };
        bless $self, $class;
        return $self;
    }
    
    sub to_string {
        my ($self) = @_;
        return "User(id=$self->{id}, email=$self->{email})";
    }
    
    package main;
    
    my $app_name = "${appName}";
    my $version = "${version}";
    
    my $user = User->new(${userId}, "${email}");
    
    print "Starting $app_name v$version\n";
    print "User: " . $user->to_string() . "\n";
  `;
  
  // R template
  const rTemplate = r`
    # ${title}
    # ${content}
    
    User <- function(id, email) {
      structure(
        list(
          id = id,
          email = email
        ),
        class = "User"
      )
    }
    
    print.User <- function(x, ...) {
      cat(sprintf("User(id=%d, email=%s)\n", x$id, x$email))
    }
    
    app_name <- "${appName}"
    version <- "${version}"
    
    user <- User(${userId}, "${email}")
    
    cat(sprintf("Starting %s v%s\n", app_name, version))
    print(user)
  `;
  
  // Elm template
  const elmTemplate = elm`
    module Main exposing (main)
    
    import Html exposing (Html, div, h1, p, text)
    import Html.Attributes exposing (class)
    
    -- ${title}
    -- ${content}
    
    type alias User =
        { id : Int
        , email : String
        }
    
    type alias Model =
        { appName : String
        , version : String
        , user : User
        }
    
    init : Model
    init =
        { appName = "${appName}"
        , version = "${version}"
        , user =
            { id = ${userId}
            , email = "${email}"
            }
        }
    
    view : Model -> Html msg
    view model =
        div [ class "app" ]
            [ h1 [] [ text model.appName ]
            , p [] [ text "Version: ", text model.version ]
            , p [] [ text "User ID: ", text (String.fromInt model.user.id) ]
            , p [] [ text "User Email: ", text model.user.email ]
            ]
    
    main : Html msg
    main =
        view init
  `;
  
  // F# template
  const fsTemplate = fs`
    // ${title}
    // ${content}
    
    type User = {
        Id: int
        Email: string
    }
    
    [<EntryPoint>]
    let main argv =
        let appName = "${appName}"
        let version = "${version}"
        
        let user = {
            Id = ${userId}
            Email = "${email}"
        }
        
        printfn "Starting %s v%s" appName version
        printfn "User: Id=%d, Email=%s" user.Id user.Email
        
        0 // return an integer exit code
  `;
  
  // Clojure template
  const cljTemplate = clj`
    ;; ${title}
    ;; ${content}
    
    (ns ${appName.toLowerCase().replace(/\s+/g, '-')}.core)
    
    (defrecord User [id email])
    
    (defn -main []
      (let [app-name "${appName}"
            version "${version}"
            user (->User ${userId} "${email}")]
        
        (println (str "Starting " app-name " v" version))
        (println (str "User: " user))))
  `;
  
  // Haskell template
  const hsTemplate = hs`
    -- ${title}
    -- ${content}
    
    module Main where
    
    data User = User
      { userId :: Int
      , userEmail :: String
      } deriving (Show)
    
    main :: IO ()
    main = do
      let appName = "${appName}"
          version = "${version}"
          user = User
            { userId = ${userId}
            , userEmail = "${email}"
            }
      
      putStrLn $ "Starting " ++ appName ++ " v" ++ version
      putStrLn $ "User: " ++ show user
  `;
  
  // ==================== CONFIGURATION FILES ====================
  
  // Dockerfile template
  const dockerfileTemplate = dockerfile`
    # ${title}
    # ${content}
    
    FROM node:18-alpine
    
    WORKDIR /app
    
    ENV APP_NAME="${appName}"
    ENV VERSION="${version}"
    
    COPY package*.json ./
    
    RUN npm install
    
    COPY . .
    
    EXPOSE ${port}
    
    CMD ["npm", "start"]
  `;
  
  // Makefile template
  const makefileTemplate = makefile`
    # ${title}
    # ${content}
    
    APP_NAME = ${appName}
    VERSION = ${version}
    
    .PHONY: all clean build test
    
    all: clean build test
    
    clean:
      @echo "Cleaning..."
      rm -rf dist
    
    build:
      @echo "Building $(APP_NAME) v$(VERSION)..."
      mkdir -p dist
      # Build commands here
    
    test:
      @echo "Testing..."
      # Test commands here
  `;
  
  // ==================== OTHER ====================
  
  // SVG template
  const svgTemplate = svg`
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="100" viewBox="0 0 200 100">
      <style>
        text {
          font-family: Arial, sans-serif;
          font-size: 16px;
        }
        .title {
          font-weight: bold;
          font-size: 20px;
        }
      </style>
      <rect width="200" height="100" fill="#f0f0f0" stroke="#333" stroke-width="2" />
      <text x="100" y="40" text-anchor="middle" class="title">${title}</text>
      <text x="100" y="70" text-anchor="middle">${appName} v${version}</text>
    </svg>
  `;
  
  // Diff template
  const diffTemplate = diff`
    diff --git a/package.json b/package.json
    index 1234567..abcdefg 100644
    --- a/package.json
    +++ b/package.json
    @@ -1,6 +1,6 @@
     {
       "name": "${appName.toLowerCase()}",
    -  "version": "0.9.0",
    +  "version": "${version}",
       "description": "${content}",
       "main": "index.js",
       "scripts": {
    @@ -8,6 +8,7 @@
         "test": "jest",
         "build": "tsc",
         "lint": "eslint src",
    +    "start": "node dist/index.js"
       },
       "author": "John Doe <${email}>",
       "license": "MIT"
  `;
  
  // Protocol Buffers template
  const protoTemplate = proto`
    syntax = "proto3";
    
    // ${title}
    // ${content}
    
    package ${appName.toLowerCase().replace(/\s+/g, '')};
    
    message User {
      int32 id = 1;
      string email = 2;
    }
    
    service UserService {
      rpc GetUser(GetUserRequest) returns (User);
      rpc UpdateUser(UpdateUserRequest) returns (User);
    }
    
    message GetUserRequest {
      int32 id = 1;
    }
    
    message UpdateUserRequest {
      int32 id = 1;
      string email = 2;
    }
  `;
  
  // Solidity template
  const solTemplate = sol`
    // SPDX-License-Identifier: MIT
    pragma solidity ^0.8.0;
    
    // ${title}
    // ${content}
    
    contract ${appName.replace(/\s+/g, '')} {
        struct User {
            uint256 id;
            string email;
        }
        
        mapping(uint256 => User) private users;
        
        event UserCreated(uint256 id, string email);
        event UserUpdated(uint256 id, string email);
        
        function createUser(uint256 _id, string memory _email) public {
            users[_id] = User(_id, _email);
            emit UserCreated(_id, _email);
        }
        
        function updateUser(uint256 _id, string memory _email) public {
            require(users[_id].id == _id, "User does not exist");
            users[_id].email = _email;
            emit UserUpdated(_id, _email);
        }
        
        function getUser(uint256 _id) public view returns (User memory) {
            return users[_id];
        }
    }
  `;

  // Print some examples
  console.log("HTML Template:");
  console.log(htmlTemplate);
  
  console.log("\nTypeScript Template:");
  console.log(tsTemplate);
  
  console.log("\nSQL Template:");
  console.log(sqlTemplate);
  
  console.log("\nJSON Template:");
  console.log(jsonTemplate);
  
  console.log("\nYAML Template:");
  console.log(yamlTemplate);
  
  console.log("\nMarkdown Template:");
  console.log(mdTemplate);
  
  console.log("\nPython Template:");
  console.log(pyTemplate);
  
  console.log("\nRust Template:");
  console.log(rsTemplate);
  
  console.log("\nSolidity Template:");
  console.log(solTemplate);
}

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  demonstrateTemplates();
}
