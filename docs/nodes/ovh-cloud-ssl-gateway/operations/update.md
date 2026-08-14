# OVH Cloud Ssl Gateway — Update

> Opération `update` · Fichier source : `nodes/OvhCloudSslGateway/resources/gatewayUpdatePut.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/sslGateway/{serviceName}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `displayName` | string | — |
| `hsts` | boolean | — |
| `httpsRedirect` | boolean | — |
| `serverHttps` | boolean | — |
| `reverse` | string | — |
| `sslConfiguration` | options | — |
| `Intermediate` | — | — |
| `Modern` | — | — |
| `Internal` | — | — |
| `allowedSource` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
