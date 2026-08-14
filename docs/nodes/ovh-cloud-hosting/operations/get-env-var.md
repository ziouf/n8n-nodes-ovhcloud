# OVH Cloud Hosting — Get Env Var

> Opération `getEnvVar` · Fichier source : `nodes/OvhCloudHosting/getEnvVar.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| GET | `/hosting/web/{serviceName}{key}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `envVarKey` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
