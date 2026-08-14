# OVH Cloud Horizon View — Add Domain User on Composer

> Opération `addDomainUserOnComposerPost` · Fichier source : `nodes/OvhCloudHorizonView/resources/domainTrust/addDomainUserOnComposerPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/horizonView/{param}{domainTrustId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `domainTrustId` | number | Oui |
| `domain` | string | Oui |
| `username` | string | Oui |
| `password` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
