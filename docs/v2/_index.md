# OVHcloud API v2 - Index des services disponibles

Ce fichier JSON représente l'index des services OVHcloud disponibles via l'API v2. Chaque service est accessible sous un chemin spécifique, avec des formats de réponse définis.

```json
{
    "apis": [
        {
            "path": "/backupServices",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/commercialCatalog",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/domain",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/iam",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/location",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/managedCMS",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/networkDefense",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/notification",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/okms",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/publicCloud",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/vmwareCloudDirector",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/vrackServices",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/webhosting",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        },
        {
            "path": "/zimbra",
            "schema": "{path}.{format}",
            "format": ["json", "yaml"],
            "description": ""
        }
    ],
    "basePath": "https://eu.api.ovh.com/v2"
}
```

## Description

Ce fichier JSON est utilisé pour documenter les services disponibles via l'API OVHcloud v2. Il est structuré comme suit :

- **`basePath`** : Le chemin de base pour tous les services OVHcloud v2.
  - Valeur : `https://eu.api.ovh.com/v2`

- **`apis`** : Une liste des services OVHcloud accessibles via l'API v2.
  - Chaque service est représenté par un objet contenant :
    - **`path`** : Le chemin spécifique pour accéder au service.
    - **`schema`** : Le schéma utilisé pour les requêtes, ici `{path}.{format}`.
    - **`format`** : Les formats de réponse supportés pour ce service.
      - Valeurs possibles : `json`, `yaml`.
    - **`description`** : Une description vide pour chaque service dans ce fichier.

## Services disponibles

Voici la liste des services OVHcloud disponibles via l'API v2, avec leurs chemins respectifs et les formats supportés :

| **Service**           | **Chemin (path)**      | **Formats supportés** |
| --------------------- | ---------------------- | --------------------- |
| Backup Services       | `/backupServices`      | json, yaml            |
| Commercial Catalog    | `/commercialCatalog`   | json, yaml            |
| Domain                | `/domain`              | json, yaml            |
| IAM                   | `/iam`                 | json, yaml            |
| Location              | `/location`            | json, yaml            |
| Managed CMS           | `/managedCMS`          | json, yaml            |
| Network Defense       | `/networkDefense`      | json, yaml            |
| Notification          | `/notification`        | json, yaml            |
| OKMS                  | `/okms`                | json, yaml            |
| Public Cloud          | `/publicCloud`         | json, yaml            |
| VMware Cloud Director | `/vmwareCloudDirector` | json, yaml            |
| Vrack Services        | `/vrackServices`       | json, yaml            |
| Web Hosting           | `/webhosting`          | json, yaml            |
| Zimbra                | `/zimbra`              | json, yaml            |

## Utilisation

Pour utiliser l'API OVHcloud v2, vous devez construire une requête en utilisant le `basePath` et le `path` du service souhaité. Le format de réponse peut être spécifié en ajoutant l'extension `.json` ou `.yaml` à la fin du chemin.

### Exemple de requête en JSON

```
GET https://eu.api.ovh.com/v2/commercialCatalog.json
```

### Exemple de requête en YAML

```
GET https://eu.api.ovh.com/v2/publicCloud.yaml
```

## Notes

- Les descriptions des services sont vides dans ce fichier.
- Les formats supportés sont uniquement `json` et `yaml`.
- Le `basePath` peut varier selon la région (ex: `https://eu.api.ovh.com/v2`, `https://ca.api.ovh.com/v2`, etc.).

## Voir aussi

- [Documentation officielle de l'API OVHcloud v2](https://api.ovh.com/)
- [Exemples d'utilisation des services OVHcloud](https://docs.ovh.com/)
