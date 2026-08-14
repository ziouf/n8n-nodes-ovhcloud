# OVH Cloud Dedicated Cloud — Update Network Allowed on Infrastructure Firewall

> Opération `allowedNetworkUpdate` · Fichier source : `nodes/OvhCloudDedicatedCloud/allowedNetwork/allowedNetworkUpdate.operation.ts`

## Requête HTTP

| Méthode | Endpoint |
| --- | --- |
| PUT | `/dedicatedCloud/{serviceName}{networkAccessId}` |

## Paramètres

| Paramètre (n8n) | Type | Requis |
| --- | --- | --- |
| `networkAccessId` | number | Oui |
| `description` | string | — |
| `network` | string | — |

## Filtres optionnels

Aucun filtre optionnel.

## Voir aussi

- [README du node](../README.md)
- [Documentation du projet](../../../README.md)
- [Mécanisme des filtres optionnels](../../../_shared/filtering.md)
