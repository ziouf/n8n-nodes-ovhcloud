# OVH Cloud Horizon View — Add Child Domain

> Opération `addChildDomainPost` · Fichier source : `nodes/OvhCloudHorizonView/resources/domainTrust/addChildDomainPost.operation.ts`

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
| `activeDirectoryIP` | string | Oui |
| `passphrase` | string | Oui |
| `serviceAccountPassword` | string | Oui |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
