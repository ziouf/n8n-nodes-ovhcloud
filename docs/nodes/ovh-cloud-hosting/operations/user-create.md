# OVH Cloud Hosting — userCreate

> Opération `userCreate` · Fichier source : `nodes/OvhCloudHosting/user/createPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/hosting/web/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | string | Oui |
| `login` | string | Oui |
| `home` | string | Oui |
| `password` | string | Oui |
| `sshState` | options | — |
| `Active` | — | — |
| `None` | — | — |
| `SFTP Only` | — | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
