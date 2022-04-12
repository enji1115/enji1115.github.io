const genre_input = ['classic', 'pop', 'rock', 'pop', 'classic', 'classic'];
const plays_input = [400, 1600, 300, 250, 100, 200];

const test1 = (genre, plays) => {
    let genre_rank = [];
    let genre_play = [];
    let genre_amount = [];
    // 장르별 재생수 합계
    for (let gen_i = 0; gen_i < genre.length; gen_i++) {
        if(genre_rank.indexOf(genre[gen_i]) > -1)  {
            genre_play[genre_rank.indexOf(genre[gen_i])] += plays[gen_i];
            genre_amount[genre_rank.indexOf(genre[gen_i])] += 1;
        } else {
            genre_rank.push(genre[gen_i]);
            genre_play.push(plays[gen_i]);
            genre_amount.push(1);
        }
    }

    // 최대값, 두번째값
    let genre_1_gen = '', genre_1_ply = 0, genre_1_amount = 0, genre_2_gen = '', genre_2_ply = 0, genre_2_amount = 0;
    for (let genre_max_i = 0; genre_max_i < genre_play.length; genre_max_i++) {
        if (genre_play[genre_max_i] > genre_1_ply) {
            genre_2_gen = genre_1_gen;
            genre_2_ply = genre_1_ply;
            genre_2_amount = genre_1_amount;

            genre_1_gen = genre_rank[genre_max_i];
            genre_1_ply = genre_play[genre_max_i];
            genre_1_amount = genre_amount[genre_max_i];
        }
    }

    // 수록곡 설정
    let album_gen = '', album_mus = '', album_mus1_idx = 0, album_mus1_ply = 0, album_mus2_idx = 0, album_mus2_ply = 0;
    if (genre_1_amount > 1) {
        album_gen = genre_1_gen;
        for (let album_mus_i1 = 0; album_mus_i1 < genre.length; album_mus_i1++) {
            if (genre[album_mus_i1] == album_gen) {
                if (plays[album_mus_i1] > album_mus1_ply) {
                    album_mus2_idx = album_mus1_idx;
                    album_mus2_ply = album_mus1_ply;
                    
                    album_mus1_idx = album_mus_i1;
                    album_mus1_ply = plays[album_mus_i1];
                } else if ((plays[album_mus_i1] == album_mus1_ply && plays[album_mus_i1] !== album_mus2_ply) 
                    || (plays[album_mus_i1] < album_mus1_ply && plays[album_mus_i1] > album_mus2_ply)) {
                    album_mus2_idx = album_mus_i1;
                    album_mus2_ply = plays[album_mus_i1];
                } 
            }
        }
        album_mus = album_mus1_idx + '와 ' + album_mus2_idx;
    } else if (genre_1_amount == 1) {
        album_gen = genre_1_gen + '과 ' + genre_2_gen;
        for (let album_mus_i2 = 0; album_mus_i2 < genre.length; album_mus_i2++) {
            if (genre[album_mus_i2] == genre_1_gen) album_mus1_idx = album_mus_i2;
            if (genre[album_mus_i2] == genre_2_gen && plays[album_mus_i2] > album_mus2_ply) {
                album_mus2_ply = plays[album_mus_i2];
                album_mus2_idx = album_mus_i2;
            }
        }
        album_mus = album_mus1_idx + '와 ' + album_mus2_idx;
    } else {
        genre_1_gen = '무언가 잘못된 상태';
        album_mus = '다시 확인이 필요한 상태';
    }

    return '앨범의 장르는 ' + album_gen + '입니다.\n' + '수록곡의 index는 ' + album_mus + '입니다.';
}

console.log(test1(genre_input, plays_input));