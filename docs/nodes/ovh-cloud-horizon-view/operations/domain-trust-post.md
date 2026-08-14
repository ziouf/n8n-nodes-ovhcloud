# OVH Cloud Horizon View — Add Domain Trust

> Opération `domainTrustPost` · Fichier source : `nodes/OvhCloudHorizonView/resources/domainTrust/domainTrustPost.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| POST | `/horizonView/{param}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `serviceName` | resourceLocator | Oui |
| `list` | list | — |
| `name` | string | — |
| `domain` | string | Oui |
| `activeDirectoryIP` | string | Oui |
| `dns1` | string | — |
| `dns2` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
