function rankingToTableRow(ranking) {
	return `
		<tr>
			<td>${ranking.Rank}</td>
			<td>${ranking.Standings}</td>
			<td>${ranking.Rating}</td>
			<td>${ranking['Games Back']}</td>
			<td>${ranking['Prev Rank']}</td>
			<td>${ranking['Prev Pnts']}</td>
			<td>${ranking['Wks Off']}</td>
			<td>${ranking['Change']}</td>
		</tr>`;
}

$(document).ready(function() {
	const rankingRows = currentRankings.map((ranking) => rankingToTableRow(ranking)).join("");
	$('#ratings > tbody:last-child').append(rankingRows);
});

